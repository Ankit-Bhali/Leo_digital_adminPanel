import React from 'react'

const Sidebar = () => {
    return (
        <div className="wrapper">
            <div className="main-nav">
                {/* Sidebar Logo */}
                <div className="logo-box">
                    <a href="index.html" className="logo-dark">
                        <img src="assets/images/logo-sm.png" className="logo-sm" alt="logo sm" />
                        <img src="assets/images/logo-dark.png" className="logo-lg" alt="logo dark" />
                    </a>
                    <a href="index.html" className="logo-light">
                        <img src="assets/images/logo-sm.png" className="logo-sm" alt="logo sm" />
                        <img src="assets/images/logo-light.png" className="logo-lg" alt="logo light" />
                    </a>
                </div>
                {/* Menu Toggle Button (sm-hover) */}
                <button type="button" className="button-sm-hover" aria-label="Show Full Sidebar">
                    <iconify-icon icon="solar:hamburger-menu-broken" className="button-sm-hover-icon" />
                </button>
                <div className="scrollbar" data-simplebar>
                    <ul className="navbar-nav" id="navbar-nav">
                        <li className="menu-title">Menu</li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:home-2-broken" />
                                </span>
                                <span className="nav-text"> Dashboard </span>
                                {/* <span className="badge bg-success badge-pill text-end">9+</span> */}
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link menu-arrow" href="#sidebarLayouts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLayouts">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:siderbar-broken" />
                                </span>
                                <span className="nav-text"> Layouts </span>
                            </a> */}
                            <div className="collapse" id="sidebarLayouts">
                                <ul className="nav sub-navbar-nav">
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="layouts-light-sidenav.html" target="_blank">Light Sidenav</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="layouts-dark-topnav.html" target="_blank">Dark Topnav</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="layouts-simple-sidenav.html" target="_blank">Simple Sidenav</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="layouts-small-sidenav.html" target="_blank">Small Sidenav</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="layouts-small-hover.html" target="_blank">Small Hover</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link disabled" href="javascript:void(0);">Small Hover Active</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="layouts-hidden-sidenav.html" target="_blank">Hidden Sidenav</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" target="_blank" href="layouts-dark.html">
                                            <span className="nav-text">Dark Mode</span>
                                            <span className="badge badge-soft-danger badge-pill text-end">Hot</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu-title">Apps</li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="apps-chat.html">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:chat-round-call-broken" />
                                </span>
                                <span className="nav-text"> Chat </span>
                            </a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="apps-email.html">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:letter-broken" />
                                </span>
                                <span className="nav-text"> Email </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-arrow" href="#sidebarCalendar" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCalendar">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:calendar-broken" />
                                </span>
                                <span className="nav-text"> Calendar </span>
                            </a>
                            <div className="collapse" id="sidebarCalendar">
                                <ul className="nav sub-navbar-nav">
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="apps-calendar-schedule.html">Schedule</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="apps-calendar-integration.html">Integration</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="apps-todo.html">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:list-heart-minimalistic-broken" />
                                </span>
                                <span className="nav-text"> Todo </span>
                            </a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-arrow" href="#sidebarInvoice" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarInvoice">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:bill-list-broken" />
                                </span>
                                <span className="nav-text"> Invoices </span>
                            </a>
                            <div className="collapse" id="sidebarInvoice">
                                <ul className="nav sub-navbar-nav">
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="apps-invoices.html">Invoices</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="apps-invoice-details.html">Invoice Details</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* <li className="menu-title">Custom</li> */}
                        <li className="nav-item">
                            {/* <a className="nav-link menu-arrow" href="#sidebarPages" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPages">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:folder-with-files-broken" />
                                </span>
                                <span className="nav-text"> Pages </span>
                            </a> */}
                            <div className="collapse" id="sidebarPages">
                                <ul className="nav sub-navbar-nav">
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="pages-starter.html">Welcome</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="pages-faqs.html">FAQs</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="pages-comingsoon.html">Coming Soon</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="pages-timeline.html">Timeline</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="pages-pricing.html">Pricing</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="pages-maintenance.html">Maintenance</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="pages-404.html">404 Error</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="pages-404-alt.html">404 Error (alt)</a>
                                    </li>
                                </ul>
                            </div>
                        </li> {/* end Pages Menu */}
                        <li className="nav-item">
                            {/* <a className="nav-link menu-arrow" href="#sidebarAuthentication" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuthentication">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:lock-password-unlocked-broken" />
                                </span>
                                <span className="nav-text"> Authentication </span>
                            </a> */}
                            <div className="collapse" id="sidebarAuthentication">
                                <ul className="nav sub-navbar-nav">
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="auth-signin.html">Sign In</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="auth-signup.html">Sign Up</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="auth-password.html">Reset Password</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="auth-lock-screen.html">Lock Screen</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="widgets.html">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:gift-broken" />
                                </span>
                                <span className="nav-text">Widgets</span>
                                <span className="badge bg-danger badge-pill text-end">Hot</span>
                            </a> */}
                        </li>
                        <li className="menu-title">Components</li>
                        <li className="nav-item">
                            {/* <a className="nav-link menu-arrow" href="#sidebarBaseUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarBaseUI">
                                <span className="nav-icon"><iconify-icon icon="solar:fire-broken" /></span>
                                <span className="nav-text"> Base UI </span>
                            </a> */}
                            <div className="collapse" id="sidebarBaseUI">
                                <ul className="nav sub-navbar-nav">
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-accordion.html">Accordion</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-alerts.html">Alerts</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-avatar.html">Avatar</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-badge.html">Badge</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-breadcrumb.html">Breadcrumb</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-buttons.html">Buttons</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-card.html">Card</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-carousel.html">Carousel</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-collapse.html">Collapse</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-dropdown.html">Dropdown</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-list-group.html">List Group</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-modal.html">Modal</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-tabs.html">Tabs</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-offcanvas.html">Offcanvas</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-pagination.html">Pagination</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-placeholders.html">Placeholders</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-popovers.html">Popovers</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-progress.html">Progress</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-scrollspy.html">Scrollspy</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-spinners.html">Spinners</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-toasts.html">Toasts</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="ui-tooltips.html">Tooltips</a>
                                    </li>
                                </ul>
                            </div>
                        </li> {/* end Base UI Menu */}

                        <li className="nav-item">
                            <a className="nav-link menu-arrow" href="#sidebarCharts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCharts">
                                <span className="nav-icon">
                                    <iconify-icon icon="solar:chart-square-broken" />
                                </span>
                                <span className="nav-text"> Charts </span>
                            </a>
                            <div className="collapse" id="sidebarCharts">
                                <ul className="nav sub-navbar-nav">
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-area.html">Area</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-bar.html">Bar</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-bubble.html">Bubble</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-candlestick.html">Candlestick</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-column.html">Column</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-heatmap.html">Heatmap</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-line.html">Line</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-mixed.html">Mixed</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-timeline.html">Timeline</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-boxplot.html">Boxplot</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-treemap.html">Treemap</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-pie.html">Pie</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-radar.html">Radar</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-radialbar.html">RadialBar</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-scatter.html">Scatter</a>
                                    </li>
                                    <li className="sub-nav-item">
                                        <a className="sub-nav-link" href="charts-apex-polar-area.html">Polar Area</a>
                                    </li>
                                </ul>
                            </div>
                        </li> {/* end Chart library Menu */}



                    </ul>
                </div>
            </div>
            {/* ========== App Menu End ========== */}
            {/* ==================================================== */}
            {/* Start right Content here */}
            {/* ==================================================== */}

            {/* ==================================================== */}
            {/* End Page Content */}
            {/* ==================================================== */}
        </div>

    )
}

export default Sidebar