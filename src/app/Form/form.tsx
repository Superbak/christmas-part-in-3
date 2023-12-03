'use client';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { classNames } from 'primereact/utils';

//import PopUp from '../Dialog/dialog';
import { Dropdown } from 'primereact/dropdown';
import Image from 'next/image';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Close } from '@mui/icons-material';

import nico from '../img/nico.png';
import nicoFinger from '../img/nico-finger.png';
import teams_json from './team.json';
import form_module from './form.module.css';

interface FormDataInt {
    team?: number;
    codice?: number;
}

export default function Form() {
    const router = useRouter();
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

    const defaultValues = {
        team: undefined,
        codice: undefined,
    }

    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit = (data: FormDataInt) => {
        setFormData(data);

        console.log(
            'team: ' + data.team,
            'codice: ' + data.codice,
            'soluzione: ' + (data.team != undefined ? teams_json[data.team]["password"] : undefined)
        )

        if (data.team != undefined && data.codice != undefined && data.codice == teams_json[data.team]["password"]) {
            router.push('/Successone');
        } else {
            setShowMessage(true);
        }

        reset();
    };

    return (
        <>
            {/*<PopUp show={false} ></PopUp>*/}

            <Dialog
                visible={showMessage}
                onHide={() => setShowMessage(false)}
                dismissableMask
                position="center"
                showHeader={false}
                pt={{
                    mask: {className: form_module.popUpBg}
                }}
            >
                <div className={form_module.popUp}>
                    <Close onClick={() => setShowMessage(false)} style={{ fontSize: '42px'}}/>
                    <div className={form_module.nicoWrapper}>
                        <Image src={nico} className={form_module.nico} alt="ribbon top" />
                        <Image src={nicoFinger} className={form_module.nicoFinger} alt="ribbon top" />
                    </div>
                    <p style={{ lineHeight: 1.5, fontSize: '50px', fontWeight: '700' }}>NO NO NO</p>
                </div>
            </Dialog>

            <div className={form_module.wrapper}>
                <div className={form_module.formContainer}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="field-box">
                            <label>Seleziona team:</label>
                            <Controller name="team" control={control} rules={{ required: 'Team è obbligatorio' }} render={({ field, fieldState }) => (
                                <Dropdown
                                    id={field.name}
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.value)}
                                    options={teams_json}
                                    optionLabel="name"
                                    optionValue="code"
                                    placeholder="Seleziona..."
                                    className={classNames(form_module.dropdown, {'invalid': fieldState.invalid })}
                                    pt={{
                                        wrapper: {
                                            className: form_module.dropdownList
                                        },
                                        item: {
                                            className: form_module.dropdownItem
                                        }
                                    }}
                                />
                            )} />
                        </div>

                        <div className="field-box">
                            <label>Codice:</label>
                            <Controller name="codice" control={control} rules={{ required: 'Codice è obbligatorio' }} render={({ field, fieldState }) => (
                                <InputNumber
                                    id={field.name}
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.value)}
                                    className={classNames(form_module.inputNumber, { 'invalid': fieldState.invalid })}
                                    useGrouping={false}
                                />
                            )} />
                        </div>

                        <div className="field-box">
                            <Button
                                type="submit"
                                label="Submit"
                                className={form_module.submitButton}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
