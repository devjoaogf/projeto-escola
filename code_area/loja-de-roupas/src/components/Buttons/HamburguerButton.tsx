import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

type Props ={
    onClick?: VoidFunction
}
export default function HamburguerButton({onClick}:Props){
    return(
        <span onClick={onClick} className='text-black cursor-pointer lg:hidden'>
            <MenuRoundedIcon/>
        </span>
    );

}