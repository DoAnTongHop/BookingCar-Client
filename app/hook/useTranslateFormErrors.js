import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// When change language is triggered, re-validate the form as to get all errors translated
// the parameters here are part of the FormikProps<Values> render props
// https://jaredpalmer.com/formik/docs/api/formik#formik-render-methods-and-props
const useTranslateFormErrors = (errors, touched, setFieldTouched) => {
    console.log('HOOK', errors);
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.on('languageChanged', lng => {
            Object.keys(errors).forEach(fieldName => {
                if (Object.keys(touched).includes(fieldName)) {
                    setFieldTouched(fieldName);
                }
            });
        });
        return () => {
            i18n.off('languageChanged', lng => { });
        };
    }, [errors]);
};

export default useTranslateFormErrors;