import { useContext } from "react"
import AlertContext from "../context/alert/AlertContext"
import {FaExclamationTriangle} from 'react-icons/fa'

function Alert() {
    const {alert} = useContext(AlertContext)
  return alert !== null && (
    <p className="flex items-start mb-4 space-x-2">
        {alert.type === 'error' && (
            <FaExclamationTriangle style={{color: 'red'}} />
        )}
        <p className="flex-1 text-base font-semibold text-red-700">
            <span>{alert.msg}</span>
        </p>
    </p>
  )
}

export default Alert