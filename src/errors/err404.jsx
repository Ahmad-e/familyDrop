import Err from '../svgs/error'
import { useTranslation } from 'react-i18next';

export default function ErrorSVG(){
    const { t } = useTranslation();

    return(
            <>
            <p className='mt-3 font-bold text-2xl'  >    
            { t("emp.err404") } 
            </p>
            <div className='flex justify-center' >
                <Err/>

            </div>

    </>
    )
}
               