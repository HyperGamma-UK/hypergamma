import { HomePage } from "./stories/pages/HomePage"
import { HyperPlusPage } from "./stories/pages/HyperPlusPage"
import { DevicesPage } from "./stories/pages/DevicesPage"
import { AnalyticsPage } from "./stories/pages/AnalyticsPage"
import { ReportsPage } from "./stories/pages/ReportsPage"
import { Dashboard } from "./stories/Dashboard"
import { TrainingPage } from "./stories/pages/plus/TrainingPage"
import { FocusPage } from "./stories/pages/plus/FocusPage"
import { PerformancePage } from "./stories/pages/plus/PeformancePage"
import { MeditationPage } from "./stories/pages/plus/MeditationPage"

// import logo from './assets/img/logo-draft-transparent-tight.png'
let dashboard = document.querySelector("hypergamma-dashboard")
if (!dashboard) dashboard = new Dashboard()
// dashboard.logo = logo
dashboard.name = 'HyperGamma'
// dashboard.renderNameInSidebar = false

const pages = {
    '/': new HomePage({
        label: "Home",
    }),
    'analytics': new AnalyticsPage({
        label: "Analytics",
    }),
    'plus': new HyperPlusPage({
        label: "Hyper+",
        pages: {
            "focus": new FocusPage({
                label: "Focus",
            }),
            "training": new TrainingPage({
                label: "Training",
            }),
            "performance": new PerformancePage({
                label: "Performance",
            }),
            "meditation": new MeditationPage({
                label: "Meditation",
            })
        }
    }),
    "devices":  new DevicesPage({
        label: "Devices",
    }),
    "reports":  new ReportsPage({
        label: "Reports",
    })
}

dashboard.pages = pages

export {
    dashboard
}
