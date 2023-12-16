import { useSelector } from 'react-redux';

function UserProfile() {
    const user = useSelector(state => state.user.user)

    const getFullName = () =>{
        return user.firstname + ' ' + user.lastname + ' ' + user.thirdname
    }

    return (
        <div className="nk-content-wrap">
            <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between g-3">
                    <div className="nk-block-head-content"><h3 className="nk-block-title page-title">Особистий кабінет користувача</h3>
                        <div className="nk-block-des text-soft"><p>An example page for customer details</p></div>
                    </div>
                </div>
            </div>
            <div className="nk-block">
                <div className="row g-gs">
                    <div className="col-xl-4">
                        <div className="card card-bordered">
                            <div className="card-inner-group">
                                <div className="card-inner">
                                    <div className="user-card user-card-s2">
                                        <div className="user-avatar lg bg-primary"><img src="/demo4/images/avatar/b-sm.jpg" alt="" /></div>
                                        <div className="user-info">
                                            <h5>{getFullName()}</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-inner"><h6 className="overline-title mb-2">Інформація</h6>
                                    <div className="row g-3">
                                        <div className="col-sm-6 col-xl-12"><span
                                            className="sub-text">Стать:</span><span>{user.gender}</span></div>
                                        <div className="col-sm-6 col-xl-12"><span
                                            className="sub-text">Дата народження:</span><span>{user.birthday}</span>
                                        </div>
                                        <div className="col-sm-6 col-xl-12"><span
                                            className="sub-text">Адрес проживання:</span><span>{user.address}</span>
                                        </div>
                                        <div className="col-sm-6 col-xl-12"><span
                                            className="sub-text">Телефон:</span><span>{user.phone}</span></div>
                                        <div className="col-sm-6 col-xl-12"><span
                                            className="sub-text">Email:</span><span>{user.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="nk-block"><h6 className="lead-text mb-3">Документи</h6>

                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="card card-bordered">
                                        <div className="card-inner">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="nk-wg1-img">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             viewBox="0 0 90 90">
                                                            <path
                                                                d="M62.92,87H10.08A4.08,4.08,0,0,1,6,82.92V7.08A4.08,4.08,0,0,1,10.08,3H47.82L67,21.23V82.92A4.08,4.08,0,0,1,62.92,87ZM47,3V16.92A4,4,0,0,0,50.88,21H66"
                                                                fill="#fff" stroke="#6576ff"
                                                                stroke-linecap="round" stroke-miterlimit="10"
                                                                stroke-width="2"></path>
                                                            <line x1="14" y1="14" x2="28" y2="14" fill="none"
                                                                  stroke="#c4cefe" stroke-linecap="round"
                                                                  stroke-linejoin="round"
                                                                  stroke-width="2"></line>
                                                            <line x1="14" y1="19" x2="36" y2="19" fill="none"
                                                                  stroke="#c4cefe" stroke-linecap="round"
                                                                  stroke-linejoin="round"
                                                                  stroke-width="2"></line>
                                                            <line x1="14" y1="37" x2="28" y2="37" fill="none"
                                                                  stroke="#c4cefe" stroke-linecap="round"
                                                                  stroke-linejoin="round"
                                                                  stroke-width="2"></line>
                                                            <line x1="14" y1="42" x2="45" y2="42" fill="none"
                                                                  stroke="#c4cefe" stroke-linecap="round"
                                                                  stroke-linejoin="round"
                                                                  stroke-width="2"></line>
                                                            <line x1="14" y1="49" x2="40" y2="49" fill="none"
                                                                  stroke="#c4cefe" stroke-linecap="round"
                                                                  stroke-linejoin="round"
                                                                  stroke-width="2"></line>
                                                            <line x1="14" y1="56" x2="32" y2="56" fill="none"
                                                                  stroke="#c4cefe" stroke-linecap="round"
                                                                  stroke-linejoin="round"
                                                                  stroke-width="2"></line>
                                                            <line x1="14" y1="63" x2="38" y2="63" fill="none"
                                                                  stroke="#c4cefe" stroke-linecap="round"
                                                                  stroke-linejoin="round"
                                                                  stroke-width="2"></line>
                                                            <line x1="14" y1="70" x2="30" y2="70" fill="none"
                                                                  stroke="#c4cefe" stroke-linecap="round"
                                                                  stroke-linejoin="round"
                                                                  stroke-width="2"></line>
                                                            <path
                                                                d="M67,40h9a9.59,9.59,0,0,0,8,8.32s.89,19-17,27.68C49.12,67.28,50,48.32,50,48.32A9.59,9.59,0,0,0,58,40Z"
                                                                fill="#6576ff"></path>
                                                            <path
                                                                d="M67,72.51C52.12,65.35,52.86,49.82,52.86,49.82A7.94,7.94,0,0,0,59.52,43H67Z"
                                                                fill="#fff"></path>
                                                            <path d="M62,61.77a11.05,11.05,0,0,1,12,0V65H62Z"
                                                                  fill="#fff"></path>
                                                            <circle cx="68.5" cy="54.5" r="3.5"
                                                                    fill="#fff"></circle>
                                                            <path
                                                                d="M68.47,58.13a4,4,0,1,1,4-4,4,4,0,0,1-4,4Zm0-6.92a3,3,0,1,0,3,3,3,3,0,0,0-3-3Zm0,0"
                                                                fill="#6576ff"></path>
                                                            <path
                                                                d="M74.5,66h-13a.51.51,0,0,1-.5-.5V62.1a1.46,1.46,0,0,1,.69-1.25,12.32,12.32,0,0,1,12.66,0A1.46,1.46,0,0,1,75,62.1v3.41a.49.49,0,0,1-.5.49ZM62,65H74V62.09a.47.47,0,0,0-.22-.41,11.28,11.28,0,0,0-11.56,0,.47.47,0,0,0-.22.41Zm.53,0"
                                                                fill="#6576ff"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="ms-3"><h6 className="lead-text">Інформована згода на попередній огляд та консультацію
                                                    </h6><span className="sub-text">Форму згоди, яка гарантуйте Вам безпечне та ефективне лікування у стоматологічній клініці "Frankolab clinic".</span>
                                                    </div>
                                                </div>
                                                <ul className="btn-toolbar justify-center gx-1 me-n1 flex-nowrap">
                                                    <li><a className="btn btn-trigger btn-icon"><em className="icon ni ni-eye"></em></a></li>
                                                    <li><a className="btn btn-trigger btn-icon"><em className="icon ni ni-download"></em></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card card-bordered">
                                        <div className="card-inner">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="nk-wg1-img">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             viewBox="0 0 90 90">
                                                            <path
                                                                d="M63.42,87H10.58A4.08,4.08,0,0,1,6.5,82.92V7.08A4.08,4.08,0,0,1,10.58,3H48.32L67.5,21.23V82.92A4.08,4.08,0,0,1,63.42,87ZM47.5,3V16.92A4,4,0,0,0,51.38,21H66.5"
                                                                fill="#fff" stroke="#6576ff"
                                                                stroke-linecap="round" stroke-miterlimit="10"
                                                                stroke-width="2"></path>
                                                            <circle cx="63.5" cy="67" r="20"
                                                                    fill="#6576ff"></circle>
                                                            <path
                                                                d="M61.87,71a6.83,6.83,0,0,1,.39-2.55,6.71,6.71,0,0,1,1.51-2.09,11.82,11.82,0,0,0,1.44-1.61,2.92,2.92,0,0,0,.47-1.59,2.47,2.47,0,0,0-.55-1.72,2,2,0,0,0-1.58-.6,2.22,2.22,0,0,0-1.61.59A2,2,0,0,0,61.33,63H58.5a4.39,4.39,0,0,1,1.4-3.37,5.27,5.27,0,0,1,3.65-1.24,5.09,5.09,0,0,1,3.64,1.23,4.48,4.48,0,0,1,1.31,3.43,5.69,5.69,0,0,1-1.77,3.86L65.3,68.37A4.08,4.08,0,0,0,64.51,71Zm-.3,3.17A1.6,1.6,0,0,1,62,73,1.69,1.69,0,0,1,65,74.17a1.65,1.65,0,0,1-.44,1.17,1.67,1.67,0,0,1-1.26.46A1.62,1.62,0,0,1,62,75.34,1.65,1.65,0,0,1,61.57,74.17Z"
                                                                fill="#fff"></path>
                                                            <circle cx="17" cy="21.5" r="4.5" fill="none"
                                                                    stroke="#6576ff" stroke-miterlimit="10"
                                                                    stroke-width="2"></circle>
                                                            <line x1="28.5" y1="20" x2="36.5" y2="20"
                                                                  fill="none" stroke="#6576ff"
                                                                  stroke-miterlimit="10"
                                                                  stroke-width="2"></line>
                                                            <line x1="28.5" y1="24" x2="43.5" y2="24"
                                                                  fill="none" stroke="#6576ff"
                                                                  stroke-miterlimit="10"
                                                                  stroke-width="2"></line>
                                                            <circle cx="17" cy="39.5" r="4.5" fill="none"
                                                                    stroke="#6576ff" stroke-miterlimit="10"
                                                                    stroke-width="2"></circle>
                                                            <line x1="28.5" y1="37" x2="36.5" y2="37"
                                                                  fill="none" stroke="#6576ff"
                                                                  stroke-miterlimit="10"
                                                                  stroke-width="2"></line>
                                                            <line x1="28.5" y1="42" x2="43.5" y2="42"
                                                                  fill="none" stroke="#6576ff"
                                                                  stroke-miterlimit="10"
                                                                  stroke-width="2"></line>
                                                            <circle cx="17" cy="56.5" r="4.5" fill="none"
                                                                    stroke="#6576ff" stroke-miterlimit="10"
                                                                    stroke-width="2"></circle>
                                                            <line x1="28.5" y1="54" x2="36.5" y2="54"
                                                                  fill="none" stroke="#6576ff"
                                                                  stroke-miterlimit="10"
                                                                  stroke-width="2"></line>
                                                            <line x1="28.5" y1="59" x2="43.5" y2="59"
                                                                  fill="none" stroke="#6576ff"
                                                                  stroke-miterlimit="10"
                                                                  stroke-width="2"></line>
                                                        </svg>
                                                    </div>
                                                    <div className="ms-3"><h6 className="lead-text">Анкета про стан здоров’я
                                                    </h6><span className="sub-text">Зазначені дані необхідні для контролю за станом Вашого здоров'я під час лікування,є лікарською таємницею та не підлягають розголошенню.</span>
                                                    </div>
                                                </div>
                                                <ul className="btn-toolbar justify-center gx-1 me-n1 flex-nowrap">
                                                    <li><a className="btn btn-trigger btn-icon"><em className="icon ni ni-eye"></em></a></li>
                                                    <li><a className="btn btn-trigger btn-icon"><em className="icon ni ni-download"></em></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;


