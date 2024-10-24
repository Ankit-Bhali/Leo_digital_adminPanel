import React from 'react'

const HomeContent = () => {
    return (

        <div className="wrapper">
            <h1>Hello</h1>
            <div className="page-content">
                {/* Start Container Fluid */}
                <div className="container-fluid">
                    {/* Start here.... */}
                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="avatar-md bg-light bg-opacity-50 rounded">
                                                <iconify-icon icon="solar:leaf-bold-duotone" className="fs-32 text-success avatar-title" />
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-6 text-end">
                                            <p className="text-muted mb-0 text-truncate">Page View</p>
                                            <h3 className="text-dark mt-1 mb-0">13, 647</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row*/}
                                </div> {/* end card body */}
                                <div className="card-footer border-0 py-2 bg-light bg-opacity-50">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <span className="text-success"> <i className="bx bxs-up-arrow fs-12" /> 2.3%</span>
                                            <span className="text-muted ms-1 fs-12">Last Month</span>
                                        </div>
                                        <a href="#!" className="text-reset fw-semibold fs-12">View More</a>
                                    </div>
                                </div> {/* end card body */}
                            </div> {/* end card */}
                        </div> {/* end col */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="avatar-md bg-light bg-opacity-50 rounded">
                                                <iconify-icon icon="solar:cpu-bolt-line-duotone" className="fs-32 text-success avatar-title" />
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-6 text-end">
                                            <p className="text-muted mb-0 text-truncate">Clicks</p>
                                            <h3 className="text-dark mt-1 mb-0">9, 526</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row*/}
                                </div> {/* end card body */}
                                <div className="card-footer border-0 py-2 bg-light bg-opacity-50">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <span className="text-success"> <i className="bx bxs-up-arrow fs-12" /> 8.1%</span>
                                            <span className="text-muted ms-1 fs-12">Last Month</span>
                                        </div>
                                        <a href="#!" className="text-reset fw-semibold fs-12">View More</a>
                                    </div>
                                </div> {/* end card body */}
                            </div> {/* end card */}
                        </div> {/* end col */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="avatar-md bg-light bg-opacity-50 rounded">
                                                <iconify-icon icon="solar:layers-bold-duotone" className="fs-32 text-success avatar-title" />
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-6 text-end">
                                            <p className="text-muted mb-0 text-truncate">Conversions</p>
                                            <h3 className="text-dark mt-1 mb-0">976</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row*/}
                                </div> {/* end card body */}
                                <div className="card-footer border-0 py-2 bg-light bg-opacity-50">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <span className="text-danger"> <i className="bx bxs-down-arrow fs-12" /> 0.3%</span>
                                            <span className="text-muted ms-1 fs-12">Last Month</span>
                                        </div>
                                        <a href="#!" className="text-reset fw-semibold fs-12">View More</a>
                                    </div>
                                </div> {/* end card body */}
                            </div> {/* end card */}
                        </div> {/* end col */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="avatar-md bg-light bg-opacity-50 rounded">
                                                <iconify-icon icon="solar:users-group-two-rounded-bold-duotone" className="fs-32 text-success avatar-title" />
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-6 text-end">
                                            <p className="text-muted mb-0 text-truncate">New Users</p>
                                            <h3 className="text-dark mt-1 mb-0">$123.6k</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row*/}
                                </div> {/* end card body */}
                                <div className="card-footer border-0 py-2 bg-light bg-opacity-50">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <span className="text-danger"> <i className="bx bxs-down-arrow fs-12" /> 10.6%</span>
                                            <span className="text-muted ms-1 fs-12">Last Month</span>
                                        </div>
                                        <a href="#!" className="text-reset fw-semibold fs-12">View More</a>
                                    </div>
                                </div> {/* end card body */}
                            </div> {/* end card */}
                        </div> {/* end col */}
                    </div> {/* end row */}
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-3">
                                            <div className="p-3">
                                                <h5 className="card-title">Conversions</h5>
                                                <div id="conversions" className="apex-charts mb-2 mt-n2" />
                                                <div className="row text-center">
                                                    <div className="col-6">
                                                        <p className="text-muted mb-2">This Week</p>
                                                        <h3 className="text-dark mb-3">23.5k</h3>
                                                    </div> {/* end col */}
                                                    <div className="col-6">
                                                        <p className="text-muted mb-2">Last Week</p>
                                                        <h3 className="text-dark mb-3">41.05k</h3>
                                                    </div> {/* end col */}
                                                </div> {/* end row */}
                                                <div className="text-center">
                                                    <button type="button" className="btn btn-light shadow-none w-100">View Details</button>
                                                </div> {/* end row */}
                                            </div>
                                        </div> {/* end left chart card */}
                                        <div className="col-lg-6 border-start border-end">
                                            <div className="p-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h4 className="card-title">Performance</h4>
                                                    <div>
                                                        <button type="button" className="btn btn-sm btn-outline-light">ALL</button>
                                                        <button type="button" className="btn btn-sm btn-outline-light">1M</button>
                                                        <button type="button" className="btn btn-sm btn-outline-light">6M</button>
                                                        <button type="button" className="btn btn-sm btn-outline-light active">1Y</button>
                                                    </div>
                                                </div> {/* end card-title*/}
                                                <div className="alert alert-warning mt-3 text text-truncate mb-0" role="alert">
                                                    We regret to inform you that our server is currently experiencing technical difficulties.
                                                </div>
                                                <div dir="ltr">
                                                    <div id="dash-performance-chart" className="apex-charts" />
                                                </div>
                                            </div>
                                        </div> {/* end right chart card */}
                                        <div className="col-lg-3">
                                            <h5 className="card-title p-3">Session By Browser</h5>
                                            <div className="px-3" data-simplebar style={{ maxHeight: 310 }}>
                                                <div className="d-flex justify-content-between align-items-center p-2">
                                                    <span className="align-middle fw-medium">Chrome</span>
                                                    <span className="fw-semibold text-muted">62.5%</span>
                                                    <span className="fw-semibold text-muted">5.06k</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center p-2">
                                                    <span className="align-middle fw-medium">Firefox</span>
                                                    <span className="fw-semibold text-muted">12.3%</span>
                                                    <span className="fw-semibold text-muted">1.5k</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center p-2">
                                                    <span className="align-middle fw-medium">Safari</span>
                                                    <span className="fw-semibold text-muted">9.86%</span>
                                                    <span className="fw-semibold text-muted">1.03k</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center p-2">
                                                    <span className="align-middle fw-medium">Brave</span>
                                                    <span className="fw-semibold text-muted">3.15%</span>
                                                    <span className="fw-semibold text-muted">0.3k</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center p-2">
                                                    <span className="align-middle fw-medium">Opera</span>
                                                    <span className="fw-semibold text-muted">3.01%</span>
                                                    <span className="fw-semibold text-muted">1.58k</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center p-2">
                                                    <span className="align-middle fw-medium">Falkon</span>
                                                    <span className="fw-semibold text-muted">2.8%</span>
                                                    <span className="fw-semibold text-muted">0.01k</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center p-2">
                                                    <span className="align-middle fw-medium">Web</span>
                                                    <span className="fw-semibold text-muted">1.05%</span>
                                                    <span className="fw-semibold text-muted">2.51k</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center p-2">
                                                    <span className="align-middle fw-medium">Other</span>
                                                    <span className="fw-semibold text-muted">6.38%</span>
                                                    <span className="fw-semibold text-muted">3.6k</span>
                                                </div>
                                            </div>
                                            <div className="text-center p-3">
                                                <button type="button" className="btn btn-light shadow-none w-100">View All</button>
                                            </div> {/* end row */}
                                        </div>
                                    </div> {/* end chart card */}
                                </div> {/* end card body */}
                            </div> {/* end card */}
                        </div> {/* end col */}
                    </div> {/* end row */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="d-flex card-header justify-content-between align-items-center border-bottom border-dashed">
                                    <h4 className="card-title">Sessions by Country</h4>
                                    <div className="dropdown">
                                        <a href="#" className="dropdown-toggle btn btn-sm btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false">
                                            View Data
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item">Download</a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item">Export</a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item">Import</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div id="world-map-markers" className="mt-3" style={{ height: 220 }}>
                                            </div>
                                        </div>
                                        <div className="col-lg-5" dir="ltr">
                                            <div className="p-3 pb-0">
                                                {/* Country Data */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1">
                                                        <iconify-icon icon="circle-flags:us" className="fs-16 align-middle me-1" /> <span className="align-middle">United States</span>
                                                    </p>
                                                </div>
                                                <div className="row align-items-center mb-3">
                                                    <div className="col">
                                                        <div className="progress progress-soft progress-sm">
                                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '82.05%' }} aria-valuenow aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <p className="mb-0 fs-13 fw-semibold">659k</p>
                                                    </div>
                                                </div>
                                                {/* Country Data */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1">
                                                        <iconify-icon icon="circle-flags:ru" className="fs-16 align-middle me-1" /> <span className="align-middle">Russia</span>
                                                    </p>
                                                </div>
                                                <div className="row align-items-center mb-3">
                                                    <div className="col">
                                                        <div className="progress progress-soft progress-sm">
                                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '70.5%' }} aria-valuenow aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <p className="mb-0 fs-13 fw-semibold">485k</p>
                                                    </div>
                                                </div>
                                                {/* Country Data */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1">
                                                        <iconify-icon icon="circle-flags:cn" className="fs-16 align-middle me-1" /> <span className="align-middle">China</span>
                                                    </p>
                                                </div>
                                                <div className="row align-items-center mb-3">
                                                    <div className="col">
                                                        <div className="progress progress-soft progress-sm">
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '65.8%' }} aria-valuenow aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <p className="mb-0 fs-13 fw-semibold">355k</p>
                                                    </div>
                                                </div>
                                                {/* Country Data */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1">
                                                        <iconify-icon icon="circle-flags:ca" className="fs-16 align-middle me-1" /> <span className="align-middle">Canada</span>
                                                    </p>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <div className="progress progress-soft progress-sm">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '55.8%' }} aria-valuenow aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <p className="mb-0 fs-13 fw-semibold">204k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end card-body*/}
                            </div> {/* end card*/}
                        </div> {/* end col*/}
                        <div className="col-lg-6">
                            <div className="card card-height-100">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                    <h4 className="card-title flex-grow-1">Top Pages</h4>
                                    <div>
                                        <a href="#" className="btn btn-sm btn-soft-primary">View All</a>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap table-centered m-0">
                                        <thead className="bg-light bg-opacity-50">
                                            <tr>
                                                <th className="text-muted py-1">Page Path</th>
                                                <th className="text-muted py-1">Page Views</th>
                                                <th className="text-muted py-1">Avg Time on Page</th>
                                                <th className="text-muted py-1">Exit Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="#" className="text-muted">rasket/dashboard.html</a></td>
                                                <td> 4265</td>
                                                <td>09m:45s</td>
                                                <td><span className="badge badge-soft-danger">20.4%</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-muted">rasket/chat.html</a></td>
                                                <td>2584 </td>
                                                <td>05m:02s</td>
                                                <td><span className="badge badge-soft-warning">12.25%</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-muted">rasket/auth-login.html</a></td>
                                                <td> 3369</td>
                                                <td>04m:25s</td>
                                                <td><span className="badge badge-soft-success">5.2%</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-muted">rasket/email.html</a></td>
                                                <td>985 </td>
                                                <td>02m:03s</td>
                                                <td><span className="badge badge-soft-danger">64.2%</span></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-muted">rasket/social.html</a></td>
                                                <td>653 </td>
                                                <td>15m:56s</td>
                                                <td><span className="badge badge-soft-success">2.4%</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> {/* end row*/}
                </div>
                {/* End Container Fluid */}
                {/* ========== Footer Start ========== */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 text-center">
                                © Rasket. Crafted by <iconify-icon icon="solar:hearts-bold-duotone" className="fs-18 align-middle text-danger" /> <a href className="fw-bold footer-text" target="_blank">Techzaa</a>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* ========== Footer End ========== */}
            </div>
        </div>
    )
}

export default HomeContent