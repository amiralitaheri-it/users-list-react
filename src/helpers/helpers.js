import Swal from "sweetalert2";
import moment from "jalali-moment";

// fire sweetalert
export function sweetalert(title, icon = "success", timer = 3000, position = 'top', showConfirmButton = false, timerProgressBar = true, isToast = true) {
    Swal.fire({
        title: title,
        icon: icon,
        showConfirmButton: showConfirmButton,
        timerProgressBar: timerProgressBar,
        timer: timer,
        toast: isToast,
        position: position,
    });
}

/**
 * ConvertGregorianToPersianDate
 * @returns persian date
 */
export function ConvertGregorianToPersianDate(getDate) {
    return moment(new Date(getDate), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')
}