import axios from "axios";

const payrollBackendServer = import.meta.env.VITE_PAYROLL_BACKEND_SERVER;
const payrollBackendPort = import.meta.env.VITE_PAYROLL_BACKEND_PORT;

console.log(payrollBackendServer)
console.log(payrollBackendPort)

export default axios.create({
    // baseURL: `http://${payrollBackendServer}:${payrollBackendPort}`,
    baseURL: `http://104.46.202.95:3000`,
    headers: {
        'Content-Type': 'application/json'
    }
});