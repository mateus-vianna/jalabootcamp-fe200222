import { Navigate } from 'react-router'
import usePayloadToken from '../hooks/auth/usePayloadToken'


export default function PrivateRoute({ authPath, outlet }) {
    const user = usePayloadToken()
    if (user) {
        return outlet
    }
    else {
        return <Navigate to={ { pathname: authPath } } />
    }
}