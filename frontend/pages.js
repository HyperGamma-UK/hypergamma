import { HomePage } from "./stories/pages/HomePage"
import { HyperPlusPage } from "./stories/pages/HyperPlusPage"
import { DevicesPage } from "./stories/pages/DevicesPage"
import { AnalyticsPage } from "./stories/pages/AnalyticsPage"
import { ReportsPage } from "./stories/pages/ReportsPage"
import { Dashboard } from "./stories/Dashboard"

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
