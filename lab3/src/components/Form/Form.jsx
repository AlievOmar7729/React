import "./Form.css";
import { Formik, Form } from "formik";
import { initialValues, schemas } from "./helper.js";
import { Input } from "../Input/input.jsx";
import {Button} from "../Button/Button.jsx";

export const PayForm = () => {
    const budgetOptions = [
        { value: "payment_of_taxes_and_fees", label: "101 Сплата суми податків і зборів / єдиного внеску" },
        { value: "payment_of_the_tax_bill", label: "109 Оплата податкового векселя" },
        { value: "payment_of_an_administrative_fine", label: "121 Сплата адміністративного штрафу" },
        { value: "advance_payments", label: "125 Авансові внески, нараховані на суму дивідентів та прирівнянних до них платежів" },
    ];

    const nonBudgetOptions = [
        { value: "other_payments", label: "Інші платежі" },
        { value: "utilities", label: "Комунальні послуги" },
        { value: "internet", label: "Інтернет/Телебачення/Телеком послуги" },
        { value: "payments_to_the_budget", label: "Платежі до бюджету (штрафи, податки, збори)" },
        { value: "payment_for_goods_and_services", label: "Оплата товарів та послуг (оплата рахунку, замовлення)" },
    ];

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schemas.pay}

            onSubmit={(values) => console.log(values)}
        >
            {({ values, handleChange }) => {

                const calculateCommission = (sum) => {
                    const parsedSum = parseFloat(sum);
                    if (isNaN(parsedSum)) return { commission: 0, total: 0 };
                    const commission = parsedSum * 0.025;
                    const total = parsedSum + commission;
                    return { commission, total };
                };

                const { commission, total } = calculateCommission(values.sum);

                return (
                    <Form className="form">
                        <h1>Оплата рахунку за реквізитами</h1>
                        <p>
                            На цій сторінці ви можете зробити переказ на реквізити будь-якої компанії
                            України. Кошти буде зараховано наступного банківського дня.
                        </p>
                        <br />
                        <h3>Одержувач</h3>
                        <Input
                            label="ЄДРПОУ або РНОКПП"
                            name="edrpoy"
                            id="edrpoy"
                            placeholder="Введіть ЄДРПОУ чи РНОКПП"
                        />
                        <Input
                            label="Назва одержувача"
                            name="recipilientName"
                            id="recipilientName"
                            placeholder="Введіть назву одержувача"
                        />
                        <Input
                            label="Рахунок IBAN"
                            name="iban"
                            id="iban"
                            placeholder="Введіть IBAN рахунок отримувача"
                        />
                        <h3>Категорія платежу</h3>
                        <Input
                            type="checkbox"
                            label="Бюджетний платіж"
                            name="paymentCategory"
                            id="paymentCategory"
                            onChange={handleChange}
                        />
                        <Input
                            type="select"
                            name="purpose"
                            id="purpose"
                            options={values.paymentCategory ? budgetOptions : nonBudgetOptions}
                        />
                        <Input
                            label="Призначення платежу"
                            name="purposeText"
                            id="purposeText"
                            placeholder="Вкажіть призначення переказу"
                        />
                        <h3>Відправник</h3>
                        <Input
                            label="ПІБ відправника"
                            name="senderName"
                            id="senderName"
                            placeholder="Необхідно заповнити ПІБ відправника"
                        />
                        <Input
                            label="Номер телефону"
                            name="senderNumber"
                            id="senderNumber"
                            placeholder="Введіть ваш номер телефону"
                        />
                        <Input
                            label="Сума"
                            name="sum"
                            id="sum"
                            placeholder="10 - 29 000"
                        />
                            <div>
                                <p>Комісія 2.5%: {commission.toFixed(2)} грн</p>
                                <p>До сплати: {total.toFixed(2)} грн</p>
                            </div>

                        <div id="bankCard">
                        <Input
                            name="numberCard"
                            id="numberCard"
                            placeholder={"Номер карти"}
                        />
                            <div className="input-row">
                        <Input
                            name="validityPeriod"
                            id="validityPeriod"
                            placeholder={"Термін дії"}
                        />
                        <Input
                            type="password"
                            name="cvv"
                            id="cvv"
                            placeholder={"CVV"}
                        />
                            </div>
                        </div>
                        <Button>Сплатити</Button>
                    </Form>
                );
            }}
        </Formik>
    );
};
