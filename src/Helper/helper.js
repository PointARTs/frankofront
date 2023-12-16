export const questionsHealth = {
    block1: [
        {
            id: "quest1",
            title: "Інфаркт міокарда, мікроінфаркт",
            input: false
        },
        {
            id: "quest2",
            title: "Серцева недостатність",
            input: false
        },
        {
            id: "quest3",
            title: "Наявність кардіостимулятора, штучного серцевого клапану",
            input: false
        },
        {
            id: "quest4",
            title: "Аритмія",
            input: false
        },
        {
            id: "quest5",
            title: "Підвищений тиск",
            input: false
        },
        {
            id: "quest6",
            title: "Понижений тиск",
            input: false
        },
        {
            id: "quest7",
            title: "Сповільнене згортання крові",
            input: false
        },
        {
            id: "quest8",
            title: "Анемія",
            input: false
        },
        {
            id: "quest9",
            title: "Бронхіальна астма",
            input: false
        },
        {
            id: "quest10",
            title: "Прояви алергії, атипові реакції на ліки (анестезію) ",
            input: false
        },
        {
            id: "quest11",
            title: "Епілептичні приступи",
            input: false
        },
        {
            id: "quest12",
            title: "Хвороби щитовидної залози",
            input: false
        },
        {
            id: "quest13",
            title: "Цукровий діабет",
            input: false
        },
        {
            id: "quest14",
            title: "Захворювання шлунково-кишкового тракту",
            input: false
        },
        {
            id: "quest15",
            title: "Гепатит А, В, С (в якому році?)",
            input: true,
            placeholder: 'В якому році?',
            optionalText: ' р.'
        },
        {
            id: "quest16",
            title: "Венеричні захворювання, СНІД /ВІЛ",
            input: false
        },
        {
            id: "quest17",
            title: "Туберкульоз (сухоти)",
            input: false
        },
        {
            id: "quest18",
            title: "Чи приймаєте в даний час які-небудь медикаменти?",
            input: true,
            placeholder: 'Зазначте їх назву'
        },
        {
            id: "quest19",
            title: "Чи Ви були оперовані впродовж останніх 5 років?",
            input: false
        },
        {
            id: "quest20",
            title: "Чи Ви вагітні?",
            forWoman: true,
            input: true,
            placeholder: 'Який тиждень?',
            optionalText: ' тиж.'
        },
        {
            id: "quest21",
            title: "Чи маєте розлади меноциклу? ",
            forWoman: true,
            input: true,
            placeholder: 'Вкажіть дату останнього меноциклу'
        },
        {
            id: "quest22",
            title: "Коли Ви востаннє проходили рентгенографічне обстеження? ",
            forWoman: true,
            input: true,
            placeholder: 'Вкажіть дату останнього рентгенографічне обстеження',
            onlyInput: true,
            optionalText: ' р.'
        },
        {
            id: "quest23",
            title: "Чи Ви курите?",
            input: false
        },
        {
            id: "quest24",
            title: "Чи Ви приймаєте наркотичні, психотропні речовини? ",
            input: false
        },
        {
            id: "quest25",
            title: "Ви вживаєте міцні алкогольні напої більше 2-х разів на тиждень?",
            input: false
        },
        {
            id: "quest26",
            title: "Чи маєте Ви інші шкідливі звички, пов’язані з зубами ",
            input: false
        },
        {
            id: "quest27",
            title: "Чи у Вас є будь-які застереження, які на Вашу думку, мали би бути врахованими під час лікування? ",
            input: false
        }
    ]
}

export const questionsSurvey = {

    block_1: [
        {
            id: "surv1",
            title: "напади ядухи",
            input: false,
            required:true
        },
        {
            id: "surv2",
            title: "задишки чи тяжкого дихання",
            input: false,
            required:true
        },
        {
            id: "surv3",
            title: "задушливого кашлю",
            input: false,
            required:true
        },
        {
            id: "surv4",
            title: "періодичні хрипи (свисти), які чути на відстані",
            input: false,
            required:true
        },
        {
            id: "surv5",
            title: "часту чи постійну закладеність носа",
            input: false,
            required:true
        },
        {
            id: "surv6",
            title: "виділення з носа без простуди",
            input: false,
            required:true
        },
        {
            id: "surv7",
            title: "свербіння та / або почервоніння очей",
            input: false,
            required:true
        },
        {
            id: "surv8",
            title: "свербіння та / або почервоніння  повік",
            input: false,
            required:true
        },
        {
            id: "surv9",
            title: "свербіння та / або почервоніння  носа",
            input: false,
            required:true
        },
        {
            id: "surv10",
            title: "цілорічно",
            input: false,
            required:true
        },
        {
            id: "surv11",
            title: "чи у весняно-літній період",
            input: false,
            required:true
        },
        {
            id: "surv12",
            title: "висипи на шкірі",
            input: false,
            required:true
        },
        {
            id: "surv13",
            title: "її почервоніння",
            input: false,
            required:true
        },
        {
            id: "surv14",
            title: "набряки шкіри",
            input: false,
            required:true
        },
        {
            id: "surv15",
            title: "відчуття свербежу шкіри",
            input: false,
            required:true
        },
        {
            id: "surv16",
            title: "болі у животі",
            input: false,
            required:true
        },
        {
            id: "surv17",
            title: "нудота",
            input: false,
            required:true
        },
        {
            id: "surv18",
            title: "часті діареї",
            input: false,
            required:true
        },
        {
            id: "surv19",
            title: "втрата свідомості",
            input: false,
            required:true
        },
        {
            id: "surv20",
            title: "зниження артеріального тиску",
            input: false,
            required:true
        },
        {
            id: "surv21",
            title: "ускладнення дихання",
            input: false,
            required:true
        },
        {
            id: "surv22",
            title: "інше",
            input: false,
            required:true
        }
    ],

    block_2: [
        {
            id: "surv23",
            title: "лікарські засоби",
            input: false,
            required:true
        },
        {
            id: "surv24",
            title: "харчових продуктів",
            input: false,
            required:true
        },
        {
            id: "surv25",
            title: "побутової хімії",
            input: false,
            required:true
        },
        {
            id: "surv26",
            title: "контакту з різними речовинами на виробництві",
            input: false,
            required:true
        },
        {
            id: "surv27",
            title: "інші речовини",
            input: true,
            required:true,
            placeholder: 'Зазначте їх назву'
        }
    ],

    block_3: [
        {
            id: "surv28",
            title: "бронхіальна астма",
            input: false,
            required:true
        },
        {
            id: "surv29",
            title: "алергічний риніт",
            input: false,
            required:true
        },
        {
            id: "surv30",
            title: "алергічний дерматит",
            input: false,
            required:true
        },
        {
            id: "surv31",
            title: "інші алергічні захворювання",
            input: false,
            required:true
        },
        {
            id: "surv32",
            title: "небезпечні реакції на укуси комах",
            input: false,
            required:true
        }

    ],

    block_4: [
        {
            id: "surv33",
            title: "Чи є у Вам інші хронічні захворювання?",
            input: true,
            required:true,
            placeholder: 'Вкажіть їх, особливо автоімунні, хвороби нирок, печінки і жовчного міхура, шлунку і кишківника, підшлункової залози, щитовидної залози'
        },
        {
            id: "surv34",
            title: "Чи існують харчові продукти, харчові домішки, які Ви не переносите",
            input: true,
            required:true,
            placeholder: 'Вкажіть їх'
        }
    ]

}

export const getFullName = (user) => {
    return user ? user.firstname + ' ' + user.lastname + ' ' + user.thirdname : ''
}

export const getBirthday = (user) =>{
    const date = user && new Date(user.birthday)
    return date ? getDate(date).getDateString() : '--/--/----'
}

export const getDate = (date) => {
    const d = date ? new Date(date) : new Date()
    const month = ['січня', 'лютого', "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]

    const getFormattedDate = (data) =>{
        return parseInt(data) < 10 ? `0${data}` : data
    }
    return d ? {
            day: d.getDate(),
            monthNumber: getFormattedDate(d.getMonth()+1),
            monthText: month[d.getMonth()],
            year: d.getFullYear(),
            getDateString: ()=>{
                return `${getFormattedDate(d.getDate())}/${getFormattedDate(d.getMonth()+1)}/${d.getFullYear()}`
            }
        } : '--/--/----'
}
