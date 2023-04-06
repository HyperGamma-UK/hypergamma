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

import homeIcon from "./assets/img/home.png"
import plusIcon from "./assets/img/plus.png"
import devicesIcon from "./assets/img/devices.png"
import analyticsIcon from "./assets/img/analytics.png"
import reportsIcon from "./assets/img/reports.png"

const icons = {
    home: homeIcon,
    plus: plusIcon,
    devices: devicesIcon,
    analytics: analyticsIcon,
    reports: reportsIcon
}
const iconEls = {}
for (const [key, value] of Object.entries(icons)) {
    const el = document.createElement('img')
    el.src = value
    iconEls[key] = el
}

import logo from './assets/img/hypergamma-logo-colorized.png'
import { ExperimentsPage } from "./stories/pages/ExperimentsPage"

let dashboard = document.querySelector("hypergamma-dashboard")
if (!dashboard) dashboard = new Dashboard()
dashboard.logo = logo
dashboard.name = 'HyperGamma'
dashboard.renderNameInSidebar = false

const pages = {
    '/': new HomePage({
        label: "Home",
        icon: iconEls.home
    }),
    'analytics': new AnalyticsPage({
        label: "Analytics",
        icon: iconEls.analytics
    }),
    'plus': new HyperPlusPage({
        label: "Hyper+",
        icon: iconEls.plus,
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
    "experiments":  new ExperimentsPage({
        label: "Experiments",
    }),
    "devices":  new DevicesPage({
        label: "Devices",
        icon: iconEls.devices,
    }),
    "reports":  new ReportsPage({
        label: "Reports",
        icon: iconEls.reports,
    })
}

dashboard.pages = pages

export {
    dashboard
}
