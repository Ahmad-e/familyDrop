import Err from '../svgs/error'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function ErrorSVG(){
    const { t } = useTranslation();
    const acc = useSelector(state => state.account);


    return(
        <>
            <p className='mt-3 font-bold text-2xl' > { t("emp.err401-1") } 
            </p> 
            {
                !(acc === "1" ||  acc === "2" ||  acc === "3" ||  acc === "4") ? (
                    <p>
                    { t("emp.err401-4") } 
                    <a href='/login'>{ t("emp.err401-3") } </a>
                    </p>
                    

                ):(
                    <p>
                    { t("emp.err401-2") } <a href={
                        acc==="1" ? ("/admin"):
                        acc==="2" ? ("/employee"):
                        acc==="3" ? ("/merchant"):
                        acc==="4" ? ("/marketer"):("")
                    }> { t("emp.err401-3") } </a>
                    </p>
                )
            }
                <div className='flex justify-center' >
            <Err/>
        </div>
    
        </>)

}
               