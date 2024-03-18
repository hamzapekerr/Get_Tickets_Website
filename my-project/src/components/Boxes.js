import React from "react"
import './Boxes.css'
import { Link } from "react-router-dom";


export default function Boxes() {
    return (
        <div className="container-fluid kutular">
            <div className="row">
                <div className="col-md-12 d-md-flex">
                    <div className="kutu kutu">
                        <div className="logoos">
                            <Link to='/ucak' style={{ textDecoration: "none", borderBottom: "none", color: '#53605e' }}>
                                <svg className="logoos" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" width="36" height="36"
                                    style={{ margin: '13px', marginLeft: '7px' }} viewBox="0 0 33 33">
                                    <defs>
                                        <path id="online-checkin@3x-a"
                                            d="M8.55,21.8583333 L24.3833333,21.8583333 L24.3833333,23.525 L8.55,23.525 L8.55,21.8583333 Z M24.8583333,14.0583333 C24.6833333,13.3916667 23.9916667,12.9916667 23.325,13.175 L18.9,14.3583333 L13.15,9 L11.5416667,9.425 L14.9916667,15.4 L10.85,16.5083333 L9.20833333,15.225 L8,15.55 L9.51666667,18.1833333 L10.1583333,19.2916667 L23.9666667,15.6 C24.6416667,15.4083333 25.0333333,14.725 24.8583333,14.0583333 Z">
                                        </path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <circle cx="16.5" cy="16.5" r="16.5" fill="#EFEFEF"></circle>
                                        <use fill="#A8ADAF" fillRule="nonzero" xlinkHref="#online-checkin@3x-a"></use>
                                    </g>
                                </svg>
                                <span>UÇAK BİLETİ</span>

                            </Link>




                        </div>

                    </div>

                    <div className="kutu kutu1">
                        <div className="logoos2">
                            <Link to='/otobus' style={{ textDecoration: "none", borderBottom: "none", color: '#53605e' }}>
                                <svg className="logoos2" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" width="33" height="33"
                                    style={{ margin: '13px', marginLeft: '7px' }} viewBox="0 0 33 33">
                                    <defs>
                                        <path id="bilet-iptal@3x-a"
                                            d="M9.21113793,9.24593103 L25.4904483,25.5252414 L24.279069,26.7362759 L21.3445862,23.8017931 L21.3445862,26.9928276 L18.0887241,26.9928276 C17.9528621,26.7535172 17.7601034,26.5504138 17.5287241,26.4021379 C17.2656207,26.2338621 16.9535517,26.135931 16.619069,26.135931 C16.2856207,26.135931 15.9732069,26.2338621 15.7104483,26.4021379 C15.4794138,26.550069 15.2866552,26.7528276 15.1511379,26.9917931 L15.1511379,26.9917931 L11.8942414,26.9917931 L11.8942414,14.3517931 L7.99975862,10.4573103 L9.21113793,9.24593103 Z M15.1502759,7.00017241 C15.2861379,7.23948276 15.4788966,7.44224138 15.7102759,7.59051724 C15.9733793,7.7587931 16.2854483,7.85637931 16.6195862,7.85637931 C16.9537241,7.85637931 17.2657931,7.7587931 17.5288966,7.59051724 C17.7595862,7.44258621 17.9523448,7.24017241 18.0882069,7.00086207 L18.0882069,7.00086207 L21.3444138,7.00086207 L21.3444138,18.9932759 L11.8944138,9.78155172 L11.8944138,7.00017241 Z">
                                        </path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <circle cx="16.5" cy="16.5" r="16.5" fill="#EFEFEF"></circle>
                                        <use fill="#A8ADAF" fillRule="nonzero" transform="translate(0 0)"
                                            xlinkHref="#bilet-iptal@3x-a"></use>
                                    </g>
                                </svg>
                                <span>OTOBÜS BİLETİ</span>
                            </Link>

                        </div>

                    </div>
                    <div className="kutu kutu2">
                        <div className="logoos3">
                            <Link to='/sinema' style={{ textDecoration: "none", borderBottom: "none", color: '#53605e' }}>
                                <svg className="logoos3" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" width="33" height="33"
                                    style={{ margin: '13px', marginLeft: '7px' }} viewBox="0 0 33 33">
                                    <defs>
                                        <path id="bilet--iptal@3x-a"
                                            d="M9.21113793,9.24593103 L25.4904483,25.5252414 L24.279069,26.7362759 L21.3445862,23.8017931 L21.3445862,26.9928276 L18.0887241,26.9928276 C17.9528621,26.7535172 17.7601034,26.5504138 17.5287241,26.4021379 C17.2656207,26.2338621 16.9535517,26.135931 16.619069,26.135931 C16.2856207,26.135931 15.9732069,26.2338621 15.7104483,26.4021379 C15.4794138,26.550069 15.2866552,26.7528276 15.1511379,26.9917931 L15.1511379,26.9917931 L11.8942414,26.9917931 L11.8942414,14.3517931 L7.99975862,10.4573103 L9.21113793,9.24593103 Z M15.1502759,7.00017241 C15.2861379,7.23948276 15.4788966,7.44224138 15.7102759,7.59051724 C15.9733793,7.7587931 16.2854483,7.85637931 16.6195862,7.85637931 C16.9537241,7.85637931 17.2657931,7.7587931 17.5288966,7.59051724 C17.7595862,7.44258621 17.9523448,7.24017241 18.0882069,7.00086207 L18.0882069,7.00086207 L21.3444138,7.00086207 L21.3444138,18.9932759 L11.8944138,9.78155172 L11.8944138,7.00017241 Z">
                                        </path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <circle cx="16.5" cy="16.5" r="16.5" fill="#EFEFEF"></circle>
                                        <use fill="#A8ADAF" fillRule="nonzero" transform="translate(0 0)"
                                            xlinkHref="#bilet--iptal@3x-a"></use>
                                    </g>
                                </svg>
                                <span>SİNEMA BİLETİ</span>
                            </Link>

                        </div>

                    </div>
                    <div className="kutu kutu3">
                        <div className="logoos4">
                            <Link to='/tiyatro' style={{ textDecoration: "none", borderBottom: "none", color: '#53605e' }}>
                                <svg className="logoos4" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" width="33" height="33"
                                    style={{ margin: '13px', marginLeft: '7px' }} viewBox="0 0 33 33">
                                    <defs>
                                        <path id="bilet--iptal@3x--a"
                                            d="M9.21113793,9.24593103 L25.4904483,25.5252414 L24.279069,26.7362759 L21.3445862,23.8017931 L21.3445862,26.9928276 L18.0887241,26.9928276 C17.9528621,26.7535172 17.7601034,26.5504138 17.5287241,26.4021379 C17.2656207,26.2338621 16.9535517,26.135931 16.619069,26.135931 C16.2856207,26.135931 15.9732069,26.2338621 15.7104483,26.4021379 C15.4794138,26.550069 15.2866552,26.7528276 15.1511379,26.9917931 L15.1511379,26.9917931 L11.8942414,26.9917931 L11.8942414,14.3517931 L7.99975862,10.4573103 L9.21113793,9.24593103 Z M15.1502759,7.00017241 C15.2861379,7.23948276 15.4788966,7.44224138 15.7102759,7.59051724 C15.9733793,7.7587931 16.2854483,7.85637931 16.6195862,7.85637931 C16.9537241,7.85637931 17.2657931,7.7587931 17.5288966,7.59051724 C17.7595862,7.44258621 17.9523448,7.24017241 18.0882069,7.00086207 L18.0882069,7.00086207 L21.3444138,7.00086207 L21.3444138,18.9932759 L11.8944138,9.78155172 L11.8944138,7.00017241 Z">
                                        </path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <circle cx="16.5" cy="16.5" r="16.5" fill="#EFEFEF"></circle>
                                        <use fill="#A8ADAF" fillRule="nonzero" transform="translate(0 0)"
                                            xlinkHref="#bilet--iptal@3x--a"></use>
                                    </g>
                                </svg>
                                <span>TİYATRO BİLETİ</span>
                            </Link>

                        </div>

                    </div>
                    <div className="kutu kutu4">
                        <div className="logoos5">
                            <Link to='/konser' style={{ textDecoration: "none", borderBottom: "none", color: '#53605e' }}>
                                <svg className="logoos5" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" width="33" height="33"
                                    style={{ margin: '13px', marginLeft: '7px' }} viewBox="0 0 33 33">
                                    <defs>
                                        <path id="bilet--iptall@3x--a"
                                            d="M9.21113793,9.24593103 L25.4904483,25.5252414 L24.279069,26.7362759 L21.3445862,23.8017931 L21.3445862,26.9928276 L18.0887241,26.9928276 C17.9528621,26.7535172 17.7601034,26.5504138 17.5287241,26.4021379 C17.2656207,26.2338621 16.9535517,26.135931 16.619069,26.135931 C16.2856207,26.135931 15.9732069,26.2338621 15.7104483,26.4021379 C15.4794138,26.550069 15.2866552,26.7528276 15.1511379,26.9917931 L15.1511379,26.9917931 L11.8942414,26.9917931 L11.8942414,14.3517931 L7.99975862,10.4573103 L9.21113793,9.24593103 Z M15.1502759,7.00017241 C15.2861379,7.23948276 15.4788966,7.44224138 15.7102759,7.59051724 C15.9733793,7.7587931 16.2854483,7.85637931 16.6195862,7.85637931 C16.9537241,7.85637931 17.2657931,7.7587931 17.5288966,7.59051724 C17.7595862,7.44258621 17.9523448,7.24017241 18.0882069,7.00086207 L18.0882069,7.00086207 L21.3444138,7.00086207 L21.3444138,18.9932759 L11.8944138,9.78155172 L11.8944138,7.00017241 Z">
                                        </path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <circle cx="16.5" cy="16.5" r="16.5" fill="#EFEFEF"></circle>
                                        <use fill="#A8ADAF" fillRule="nonzero" transform="translate(0 0)"
                                            xlinkHref="#bilet--iptall@3x--a"></use>
                                    </g>
                                </svg>
                                <span>KONSER BİLETİ</span>
                            </Link>

                        </div>

                    </div>

                    <div className="kutu kutu5">
                        <div className="logoos6">
                            <Link to='/sign-up' style={{ textDecoration: "none", borderBottom: "none", color: '#53605e' }}>
                                <svg className="logoos6" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" width="33" height="33"
                                    style={{ margin: '13px', marginLeft: '7px' }} viewBox="0 0 33 33">
                                    <defs>
                                        <path id="bilet-iptall@3x--a"
                                            d="M9.21113793,9.24593103 L25.4904483,25.5252414 L24.279069,26.7362759 L21.3445862,23.8017931 L21.3445862,26.9928276 L18.0887241,26.9928276 C17.9528621,26.7535172 17.7601034,26.5504138 17.5287241,26.4021379 C17.2656207,26.2338621 16.9535517,26.135931 16.619069,26.135931 C16.2856207,26.135931 15.9732069,26.2338621 15.7104483,26.4021379 C15.4794138,26.550069 15.2866552,26.7528276 15.1511379,26.9917931 L15.1511379,26.9917931 L11.8942414,26.9917931 L11.8942414,14.3517931 L7.99975862,10.4573103 L9.21113793,9.24593103 Z M15.1502759,7.00017241 C15.2861379,7.23948276 15.4788966,7.44224138 15.7102759,7.59051724 C15.9733793,7.7587931 16.2854483,7.85637931 16.6195862,7.85637931 C16.9537241,7.85637931 17.2657931,7.7587931 17.5288966,7.59051724 C17.7595862,7.44258621 17.9523448,7.24017241 18.0882069,7.00086207 L18.0882069,7.00086207 L21.3444138,7.00086207 L21.3444138,18.9932759 L11.8944138,9.78155172 L11.8944138,7.00017241 Z">
                                        </path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <circle cx="16.5" cy="16.5" r="16.5" fill="#EFEFEF"></circle>
                                        <use fill="#A8ADAF" fillRule="nonzero" transform="translate(0 0)"
                                            xlinkHref="#bilet-iptall@3x--a"></use>
                                    </g>
                                </svg>
                                <span>ÜYE OL</span>
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    );

}

