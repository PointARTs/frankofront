import {useEffect} from "react";


function Stage5({title}) {
    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    useEffect(()=>{
        document.title = `${title} | FrankoLab`
    },[title])

    return (
        <div className="nk-block">
            <div className="row g-gs">
                <div className="col-md-12 col-sm-12">
                    <div className="card card-bordered card-full">
                        <div className="nk-wg1">
                            <div className="nk-wg1-block">
                                <div className="nk-wg1-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                                        <path
                                            d="M62.92,87H10.08A4.08,4.08,0,0,1,6,82.92V7.08A4.08,4.08,0,0,1,10.08,3H47.82L67,21.23V82.92A4.08,4.08,0,0,1,62.92,87ZM47,3V16.92A4,4,0,0,0,50.88,21H66"
                                            fill="#fff"
                                            stroke="#6576ff"
                                            strokeLinecap="round"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1={14}
                                            y1={14}
                                            x2={28}
                                            y2={14}
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1={14}
                                            y1={19}
                                            x2={36}
                                            y2={19}
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1={14}
                                            y1={37}
                                            x2={28}
                                            y2={37}
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1={14}
                                            y1={42}
                                            x2={45}
                                            y2={42}
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1={14}
                                            y1={49}
                                            x2={40}
                                            y2={49}
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1={14}
                                            y1={56}
                                            x2={32}
                                            y2={56}
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1={14}
                                            y1={63}
                                            x2={38}
                                            y2={63}
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1={14}
                                            y1={70}
                                            x2={30}
                                            y2={70}
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                        <path
                                            d="M67,40h9a9.59,9.59,0,0,0,8,8.32s.89,19-17,27.68C49.12,67.28,50,48.32,50,48.32A9.59,9.59,0,0,0,58,40Z"
                                            fill="#6576ff"
                                        />
                                        <path
                                            d="M67,72.51C52.12,65.35,52.86,49.82,52.86,49.82A7.94,7.94,0,0,0,59.52,43H67Z"
                                            fill="#fff"
                                        />
                                        <path d="M62,61.77a11.05,11.05,0,0,1,12,0V65H62Z" fill="#fff"/>
                                        <circle cx="68.5" cy="54.5" r="3.5" fill="#fff"/>
                                        <path
                                            d="M68.47,58.13a4,4,0,1,1,4-4,4,4,0,0,1-4,4Zm0-6.92a3,3,0,1,0,3,3,3,3,0,0,0-3-3Zm0,0"
                                            fill="#6576ff"
                                        />
                                        <path
                                            d="M74.5,66h-13a.51.51,0,0,1-.5-.5V62.1a1.46,1.46,0,0,1,.69-1.25,12.32,12.32,0,0,1,12.66,0A1.46,1.46,0,0,1,75,62.1v3.41a.49.49,0,0,1-.5.49ZM62,65H74V62.09a.47.47,0,0,0-.22-.41,11.28,11.28,0,0,0-11.56,0,.47.47,0,0,0-.22.41Zm.53,0"
                                            fill="#6576ff"
                                        />
                                    </svg>
                                </div>
                                <div className="nk-wg1-text"><h5 className="title">Інформована згода на попередній огляд та консультацію</h5>
                                    <p>Форму згоди, яка гарантуйте Вам безпечне та ефективне лікування у стоматологічній клініці "Frankolab clinic".</p></div>
                            </div>
                            <div className="nk-wg1-action">
                                <a href="/agreement" className="link"><span>Переглянути Документ</span> <em className="icon ni ni-chevron-right"></em></a>
                                <a href="/agreement/print" className="link"><span>Друкувати/Зберегти документ</span><em className="icon ni ni-chevron-right"></em></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-sm-12">
                    <div className="card card-bordered card-full">
                        <div className="nk-wg1">
                            <div className="nk-wg1-block">
                                <div className="nk-wg1-img">
                                    <svg
                                        width={90}
                                        height={90}
                                        viewBox="0 0 90 90"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M62.92 87H10.08C8.99792 87 7.96015 86.5701 7.195 85.805C6.42986 85.0398 6 84.0021 6 82.92V7.08C6 5.99792 6.42986 4.96015 7.195 4.195C7.96015 3.42986 8.99792 3 10.08 3H47.82L67 21.23V82.92C67 84.0021 66.5701 85.0398 65.805 85.805C65.0398 86.5701 64.0021 87 62.92 87ZM47 3V16.92C46.9784 17.9742 47.374 18.9942 48.1006 19.7583C48.8272 20.5223 49.8261 20.9686 50.88 21H66"
                                            fill="white"
                                        />
                                        <path
                                            d="M47 3V16.92C46.9784 17.9742 47.374 18.9942 48.1006 19.7583C48.8272 20.5223 49.8261 20.9686 50.88 21H66M62.92 87H10.08C8.99792 87 7.96015 86.5701 7.195 85.805C6.42986 85.0398 6 84.0021 6 82.92V7.08C6 5.99792 6.42986 4.96015 7.195 4.195C7.96015 3.42986 8.99792 3 10.08 3H47.82L67 21.23V82.92C67 84.0021 66.5701 85.0398 65.805 85.805C65.0398 86.5701 64.0021 87 62.92 87Z"
                                            stroke="#6576FF"
                                            strokeWidth={2}
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M14 14H28"
                                            stroke="#C4CEFE"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 19H36"
                                            stroke="#C4CEFE"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 37H28"
                                            stroke="#C4CEFE"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 42H45"
                                            stroke="#C4CEFE"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 49H40"
                                            stroke="#C4CEFE"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 56H32"
                                            stroke="#C4CEFE"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 63H38"
                                            stroke="#C4CEFE"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 70H30"
                                            stroke="#C4CEFE"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M62 61.77C63.7877 60.6141 65.8712 59.9991 68 59.9991C70.1288 59.9991 72.2123 60.6141 74 61.77V65H62V61.77Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M68.5 58C70.433 58 72 56.433 72 54.5C72 52.567 70.433 51 68.5 51C66.567 51 65 52.567 65 54.5C65 56.433 66.567 58 68.5 58Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M50.1402 43.0563C52.1394 41.0456 54.805 40 57.9037 40C61.6522 40.0804 65.1674 42.1394 67 45.2922C68.8492 42.1394 72.3478 40.0643 76.1296 40C79.195 40 81.8606 41.0617 83.8598 43.0724C85.9756 45.1796 87.1084 48.1877 86.9918 51.2761C86.9918 61.941 69.9155 74.0054 67.9663 75.3405L67 76L66.0337 75.3405C65.2507 74.8097 47.0082 62.2145 47.0082 51.3887C46.8916 48.2038 48.0244 45.1635 50.1402 43.0563ZM65.334 70.8204V51.2601C65.334 48.6542 64.0845 46.8686 64.0845 46.8686C62.8184 44.6649 60.436 43.2815 57.8704 43.2172C55.7379 43.2172 53.9054 43.941 52.5559 45.2922C51.0732 46.7882 50.2735 48.9598 50.3568 51.3405C50.3568 57.3887 58.5535 65.6408 65.3507 70.8204H65.334Z"
                                            fill="#6576FF"
                                        />
                                        <mask
                                            id="mask0_252_2"
                                            style={{ maskType: "alpha" }}
                                            maskUnits="userSpaceOnUse"
                                            x={56}
                                            y={50}
                                            width={21}
                                            height={16}
                                        >
                                            <path
                                                d="M77 58.001C77 58.4916 76.6089 58.8898 76.125 58.8898H73.9673C73.5718 58.8898 73.2244 59.1609 73.122 59.5475L71.6546 65.0952C71.4875 65.6507 71.0202 66 70.4812 66H70.4664C69.9213 65.9938 69.4557 65.6312 69.3079 65.0988L66.4431 53.3438L63.6624 63.3328C63.4952 63.8634 63.0586 64.2002 62.5424 64.2207C62.0069 64.25 61.5632 63.9407 61.3655 63.4545L59.9655 59.4782C59.8404 59.1262 59.5096 58.8889 59.1412 58.8889H56.875C56.3911 58.8889 56 58.4907 56 58.0001C56 57.5095 56.3911 57.1113 56.875 57.1113H59.1421C60.2481 57.1113 61.2404 57.8215 61.614 58.8791L62.4348 61.2131L65.3082 50.8899C65.4841 50.3344 65.9444 49.9771 66.4991 50.0011C67.0399 50.0109 67.5019 50.3726 67.6498 50.9006L70.5014 62.6022L71.4306 59.0862C71.7378 57.9237 72.7799 57.1113 73.9655 57.1113H76.1232C76.6071 57.1113 76.9982 57.5095 76.9982 58.0001L77 58.001Z"
                                                fill="black"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_252_2)">
                                            <path d="M55 50H65V65H55V50Z" fill="#6576FF" />
                                        </g>
                                        <mask
                                            id="mask1_252_2"
                                            style={{ maskType: "alpha" }}
                                            maskUnits="userSpaceOnUse"
                                            x={56}
                                            y={50}
                                            width={21}
                                            height={16}
                                        >
                                            <path
                                                d="M77 58.001C77 58.4916 76.6089 58.8898 76.125 58.8898H73.9673C73.5718 58.8898 73.2244 59.1609 73.122 59.5475L71.6546 65.0952C71.4875 65.6507 71.0202 66 70.4812 66H70.4664C69.9213 65.9938 69.4557 65.6312 69.3079 65.0988L66.4431 53.3438L63.6624 63.3328C63.4952 63.8634 63.0586 64.2002 62.5424 64.2207C62.0069 64.25 61.5632 63.9407 61.3655 63.4545L59.9655 59.4782C59.8404 59.1262 59.5096 58.8889 59.1412 58.8889H56.875C56.3911 58.8889 56 58.4907 56 58.0001C56 57.5095 56.3911 57.1113 56.875 57.1113H59.1421C60.2481 57.1113 61.2404 57.8215 61.614 58.8791L62.4348 61.2131L65.3082 50.8899C65.4841 50.3344 65.9444 49.9771 66.4991 50.0011C67.0399 50.0109 67.5019 50.3726 67.6497 50.9006L70.5014 62.6022L71.4306 59.0862C71.7377 57.9237 72.7799 57.1113 73.9655 57.1113H76.1232C76.6071 57.1113 76.9982 57.5095 76.9982 58.0001L77 58.001Z"
                                                fill="black"
                                            />
                                        </mask>
                                        <g mask="url(#mask1_252_2)">
                                            <path d="M65 50H78V66H65V50Z" fill="white" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="nk-wg1-text"><h5 className="title">Анкета про стан здоров’я</h5>
                                    <p>Зазначені дані необхідні для контролю за станом Вашого здоров'я під час лікування,є лікарською таємницею та не підлягають розголошенню.</p></div>
                            </div>
                            <div className="nk-wg1-action">
                                <a href="/health" className="link"><span>Переглянути Документ</span> <em className="icon ni ni-chevron-right"></em></a>
                                <a href="/health/print" className="link"><span>Скачати Документ</span><em className="icon ni ni-chevron-right"></em></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-sm-12">
                    <div className="card card-bordered card-full">
                        <div className="nk-wg1">
                            <div className="nk-wg1-block">
                                <div className="nk-wg1-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                                        <path
                                            d="M63.42,87H10.58A4.08,4.08,0,0,1,6.5,82.92V7.08A4.08,4.08,0,0,1,10.58,3H48.32L67.5,21.23V82.92A4.08,4.08,0,0,1,63.42,87ZM47.5,3V16.92A4,4,0,0,0,51.38,21H66.5"
                                            fill="#fff"
                                            stroke="#6576ff"
                                            strokeLinecap="round"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                        <circle cx="63.5" cy={67} r={20} fill="#6576ff" />
                                        <path
                                            d="M61.87,71a6.83,6.83,0,0,1,.39-2.55,6.71,6.71,0,0,1,1.51-2.09,11.82,11.82,0,0,0,1.44-1.61,2.92,2.92,0,0,0,.47-1.59,2.47,2.47,0,0,0-.55-1.72,2,2,0,0,0-1.58-.6,2.22,2.22,0,0,0-1.61.59A2,2,0,0,0,61.33,63H58.5a4.39,4.39,0,0,1,1.4-3.37,5.27,5.27,0,0,1,3.65-1.24,5.09,5.09,0,0,1,3.64,1.23,4.48,4.48,0,0,1,1.31,3.43,5.69,5.69,0,0,1-1.77,3.86L65.3,68.37A4.08,4.08,0,0,0,64.51,71Zm-.3,3.17A1.6,1.6,0,0,1,62,73,1.69,1.69,0,0,1,65,74.17a1.65,1.65,0,0,1-.44,1.17,1.67,1.67,0,0,1-1.26.46A1.62,1.62,0,0,1,62,75.34,1.65,1.65,0,0,1,61.57,74.17Z"
                                            fill="#fff"
                                        />
                                        <circle
                                            cx={17}
                                            cy="21.5"
                                            r="4.5"
                                            fill="none"
                                            stroke="#6576ff"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1="28.5"
                                            y1={20}
                                            x2="36.5"
                                            y2={20}
                                            fill="none"
                                            stroke="#6576ff"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1="28.5"
                                            y1={24}
                                            x2="43.5"
                                            y2={24}
                                            fill="none"
                                            stroke="#6576ff"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                        <circle
                                            cx={17}
                                            cy="39.5"
                                            r="4.5"
                                            fill="none"
                                            stroke="#6576ff"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1="28.5"
                                            y1={37}
                                            x2="36.5"
                                            y2={37}
                                            fill="none"
                                            stroke="#6576ff"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1="28.5"
                                            y1={42}
                                            x2="43.5"
                                            y2={42}
                                            fill="none"
                                            stroke="#6576ff"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                        <circle
                                            cx={17}
                                            cy="56.5"
                                            r="4.5"
                                            fill="none"
                                            stroke="#6576ff"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1="28.5"
                                            y1={54}
                                            x2="36.5"
                                            y2={54}
                                            fill="none"
                                            stroke="#6576ff"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                        <line
                                            x1="28.5"
                                            y1={59}
                                            x2="43.5"
                                            y2={59}
                                            fill="none"
                                            stroke="#6576ff"
                                            strokeMiterlimit={10}
                                            strokeWidth={2}
                                        />
                                    </svg>
                                </div>
                                <div className="nk-wg1-text"><h5 className="title">Aнкета опитувальник для пацієнта</h5>
                                    <p>Зазначені дані необхідні для контролю за станом Вашого здоров'я під час лікування,є лікарською таємницею та не підлягають розголошенню.</p></div>
                            </div>
                            <div className="nk-wg1-action">
                                <a href="/survey" className="link"><span>Переглянути Документ</span> <em className="icon ni ni-chevron-right"></em></a>
                                <a href="/survey/print" className="link"><span>Скачати Документ</span><em className="icon ni ni-chevron-right"></em></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stage5;
