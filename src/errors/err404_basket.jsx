import Err from '../svgs/error'
import { useTranslation } from 'react-i18next';

export default function ErrorSVG(){
    const { t } = useTranslation();

    return(
            <div className='m-5  '>
                <div>
                    { t("emp.err401-4-basket") }  
                    <a className='main_color' href='products'>{ t("emp.err401-3") } </a>
                </div>
                <div className='flex justify-center' >
                    <Err/>
                </div>
            </div>
    )
}
               