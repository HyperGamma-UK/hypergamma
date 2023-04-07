import { WebglLinePlotUtil } from 'graphscript-services';//'../../../webgl-plot-utils/webgl-plot-utils'//
import canvasworker from './canvas.worker'
import { workerCanvasRoutes } from 'graphscript/src/services/worker/WorkerCanvas' //../../../GraphServiceRouter/services/worker/WorkerCanvas'//'graphscript/services/worker/WorkerCanvas';

export class WGLPlotter {

    plotter = new WebglLinePlotUtil();
    plot
    options

    constructor(options) {
        if(options) {
            this.options = options;
            this.create(options);
        }
    }

    create = (options=this.options) => {

        const init = (options, canvas) => {

            this.plotter.initPlot(options);
            
            let onresize = (o) => {    
                canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
                options.overlay.width = canvas.clientWidth; options.overlay.height = canvas.clientHeight;
                ((this.plotter.plots[options._id].plot).webgl).viewport(0, 0, canvas.width, canvas.height);
                (this.plotter.plots[options._id].plot).update();
            }

            if(typeof window !== 'undefined') window.addEventListener('resize',onresize);
            else canvas.addEventListener('resize',onresize);

            
            setTimeout(()=>{onresize(canvas)},10);

        }

        const update = (options, canvas, context, input) => {
            //console.log('update plotter')
            this.plotter.update(options._id, input);
        }

        const clear = (options, canvas, context) => {
            this.plotter.deinitPlot(options._id);   
        }

        options.init = init;
        options.update = update;
        options.clear = clear;
    
        if(options.worker) {
    
            if(options.worker === true) options.worker = new Worker(canvasworker);
            else if (typeof options.worker === 'string' || options.worker instanceof Blob) options.worker = new Worker(options.worker);
            
            if(options.overlay) {
                let offscreen = (options.overlay).transferControlToOffscreen();
                options.overlay = offscreen;
                options.transfer = [options.overlay];
            }
        }
    
        this.plot = workerCanvasRoutes.Renderer(options);
        return this.plot;
    }
    

    update = (data) => {
        if (!this.plot) this.create(this.options); // NOTE: Using global scope will result in issues since the (wrapper) promise is not awaited
        this.plot.update(data);
    }

}


