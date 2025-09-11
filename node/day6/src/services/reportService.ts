import reportRepository from "../repositories/reportRepository"

const reportService = {
    revenue() {
        try {
            return reportRepository.revenue()
        } catch (error) {
            throw error
        }
    },
    popular() {
        try {
            return reportRepository.popular()
        } catch (error) {
            throw error
        }
    },
    monthly() {
        try {
            return reportRepository.monthly()
        } catch (error) {
            throw error
        }
    }
}

export default reportService