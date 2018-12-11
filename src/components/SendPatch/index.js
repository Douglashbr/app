import React from 'react';
import {withFormik} from 'formik';
import * as Yup from 'yup';

import InputText from '../../objects/InputText';
import InputArea from '../../objects/InputArea';
import ButtonPatch from '../ButtonPatch';
import FormPatch from '../../objects/FormPatch';
import MsgError from '../../objects/MsgError';

const SendPatch = props => {
    const { values, handleChange, handleSubmit, errors } = props;
    return(
        <FormPatch onSubmit={handleSubmit}>
            <InputText 
                autoComplete="off"
                name="email" 
                value={values.email} 
                placeholder="Seu e-mail"  
                onChange={handleChange}
                error={errors.email}
            />
            <InputArea 
                name="msg" 
                value={values.msg} 
                placeholder="Mensagem para MarcoBrunoBr"
                onChange={handleChange} 
                error={errors.msg}
            />
            
            <ButtonPatch as="button" type="submit">Enviar</ButtonPatch>
        </FormPatch>
    );

};

const SendPatchEnhanced = withFormik({
    //mapear valores inicias dos campos
    mapPropsToValues: () => ({email: '', msg: ''}),
    validationSchema: Yup.object().shape({
        email: Yup.string()
               .email('Por favor, digite um e-mail válido!')
               .required("Por favor, preencha o campo Seu e-mail!"),
        msg: Yup.string().required('Por favor, preencher o campo Mensagem')
    }),
    handleSubmit: () => {
        console.log("AE");
    }
})(SendPatch);

export default SendPatchEnhanced;