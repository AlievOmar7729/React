import * as Yup from 'yup';

const regx = {
    edrpoy: /^\d{8,10}$/,
    recipilientName: /^.{3,}$/,
    iban: /^UA\d{27}$/,
    purposeText: /^.{6,}$/,
    senderName: /^[A-Za-zА-Яа-яЁёЄєІіЇїЛл\s]{2,}$/,
    senderNumber: /^\+380(39|50|63|66|67|68|73|91|93|95|96|97|98|99)\d{7}$/,
    sum: /^([1-9][0-9]{1,3}|[1-2][0-9]{4}|29000)$/,
    numberCard: /^\d{16}$/,
    validityPeriod: /^(0[1-9]|1[0-2])\/\d{2}$/,
    cvv: /^\d{3}$/

}


const edrpoy = Yup.string()
    .matches(regx.edrpoy,"ЄДРПОУ повинно містити не менш ніж 8 символів і не більше 10")
    .required("Введіть ЄДРПОУ чи РНОКПП")

const recipilientName = Yup.string()
    .matches(regx.recipilientName, "Найменування одержувача повинно містити не менш ніж 3 символи")
    .required("Введіть назву одержувача")

const iban = Yup.string()
    .matches(regx.iban,"Поле р/р або IBAN невірне")
    .required("Введіть IBAN рахунок отримувача")

const purposeText = Yup.string()
    .matches(regx.purposeText,"Призначення платежу має містити не менш ніж 6 символів")
    .required("Вкажіть призначення переказу")

const senderName = Yup.string()
    .matches(regx.senderName,"Значення \"ПІБ відправника\" не вірне.")
    .required("Необхідно заповнити \"ПІБ відправника\".")

const senderNumber = Yup.string()
    .matches(regx.senderNumber,"Номер телефону вказано невірно")
    .required("Введіть ваш номер телефону.")

const sum = Yup.string()
    .matches(regx.sum,"Максимальна сума – 29000 грн")
    .required("Мінімальна сума – 10 грн")

const numberCard = Yup.string()
    .matches(regx.numberCard,"Вказані не всі цифри картки")
    .required("Необхідно заповнити номер картки")

const validityPeriod = Yup.string()
    .matches(regx.validityPeriod,"Невірний термін дії картки")
    .required("Необхідно заповнити термін дії картки")

const cvv = Yup.string()
    .matches(regx.cvv,"CVV2/CVC2 введено невірно")
    .required("Необхідно заповнити CVV2/CVC2")




export const schemas = {
    pay: Yup.object().shape({
        edrpoy,
        recipilientName,
        iban,
        purposeText,
        senderName,
        senderNumber,
        sum,
        numberCard,
        validityPeriod,
        cvv,
    }),
};

export const initialValues =  {
    edrpoy: "",
    recipilientName: "",
    iban:"",
    paymentCategory: false,
    purpose: 1,
    purposeText : "",
    senderName: "",
    senderNumber:"",
    sum:"",
    numberCard:"",
    validityPeriod:"",
    cvv:"",
};