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

export const roleOptionForAmin = [
    { value : 'IBO', label : 'IBO' },
    { value : 'branch', label : 'Branch' }
]

export const timeOption = [
    { value : new Date().setDate(new Date().getDate() - 7), label : '1 week' },
    { value : new Date().setDate(new Date().getDate() - 30), label : '1 month' },
    { value : new Date().setDate(new Date().getDate() - 90), label : '3 month' },
    { value : new Date().setDate(new Date().getDate() - 180), label : '6 month' },
    { value : new Date().setDate(new Date().getDate() - 365), label : '1 Year' }
]

export const optionForExpenceType = [
    { value : 'Office expence', label : 'Office expence' },
    { value : 'Employee expence', label : 'Employee expence' },
    { value : 'Misleniuneous expence', label : 'Misleniuneous expence' },
    { value : 'Other expence', label : 'Other expence' }
]

export const optionForCostCategory = [
    { value : 'Petrol', label : 'Petrol' },
    { value : 'Food', label : 'Food' },
    { value : 'Rent', label : 'Rent' },
    { value : 'Tea', label : 'Tea' },
    { value : 'Transport', label : 'Transport' },
    { value : 'Gift', label : 'Gift' },
    { value : 'Printing', label : 'Printing' },
    { value : 'Advertising', label : 'Advertising' },
    { value : 'Electricity Bill', label : 'Electricity Bill' },
    { value : 'Cleaning', label : 'Cleaning' },
    { value : 'Salary', label : 'Salary' },
    { value : 'Medical Expences', label : 'Medical Expences' },
    { value : 'Insurance', label : 'Insurance' },
    { value : 'Legal & Professionals Fees', label : 'Legal & Professionals Fees' },
    { value : 'Phone Bill', label : 'Phone Bill' },
    { value : 'Internet Bill', label : 'Internet Bill' },
    { value : 'Stationaries Bill', label : 'Stationaries Bill' },
    { value : 'Depreciation', label : 'Depreciation' },
    { value : 'Row materials', label : 'Row materials' },
    { value : 'Books and magazine subscriptions', label : 'Books and magazine subscriptions' }
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

export const formateStatusForTargets = (status) => {
    switch (+status) {
        case (1):
            return 'Running';
        case (2):
            return 'Finished';
        case (3):
            return 'Cancelled';
        case (4):
            return 'Archieved';         
        default:
            return 'Cancelled';
    }
}