import { toast } from 'react-toastify'

import { NotifyProps } from './types'

const useNotify = () => {
  const notify = ({ message, type = 'success' }: NotifyProps) => {
    if (type === 'success') {
      return toast(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark'
      })
    }
    if (type === 'loading') {
      return toast.loading(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark'
      })
    }
    return toast(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark'
    })
  }
  const removeAllToast = () => {
    toast.dismiss()
  }
  return { notify, removeAllToast }
}

export default useNotify
