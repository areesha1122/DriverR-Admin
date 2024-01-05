import Swal from 'sweetalert2';
import { primaryBlue } from 'components/globaStyle';

const Index = (icon = null, title = null, message = 'Error occured') => {
    return (
        Swal.fire({
            icon: icon,
            title: title,
            text: message,
            allowEscapeKey: false,
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            confirmButtonColor: primaryBlue,
        })
    )
};

export default Index