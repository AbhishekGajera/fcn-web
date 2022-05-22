export const statusOption = [
    { value : 0, label : 'Active' },
    { value : 1, label : 'In Active' },
    { value : 2, label : 'Terminated' }
]

export const roleOption = [
    { value : 'user', label : 'User' },
    { value : 'admin', label : 'Admin' },
    { value : 'IBO', label : 'IBO' },
    { value : 'branch', label : 'Branch' }
]

export const formateStatus = (status) => {
    switch (+status) {
        case (0):
            return 'Active';
        case (1):
            return 'In Active';
        case (2):
            return 'Terminated'            
        default:
            return 'Active';
    }
}