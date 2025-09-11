import { Order } from "../models"

const reportRepository = {

    async revenue() {
        try {
            const result = await Order.aggregate(
                [
                    { $match: { status: "completed" } },
                    {
                        $group: {
                            _id: "$status",
                            total_revenue: { $sum: "$total_amount" }
                        },
                    },
                    {
                        $project: { _id: 0 }
                    }
                ]
            )

            if (!result) throw new Error("No such Order")
            return result

        } catch (error) {
            throw error
        }
    },
    async popular() {
        try {
            const result = await Order.aggregate(
                [
                    { $match: { status: "completed" } },
                    { $unwind: "$items" },
                    {
                        $group: {
                            _id: "$items.product_id",
                            count: { $sum: 1 }
                        }
                    },
                    { $sort: { count: -1 } },
                    { $limit: 1 }
                ]
            )
            if (!result) throw new Error("No such order")
            return result
        } catch (error) {
            throw error
        }
    },
    async monthly() {
        try {
            const monthlySales = await Order.aggregate([
                { $match: { status: "completed" } },
                {
                    $group: {
                        _id: {
                            year: { $year: "$order_date" },
                            month: { $month: "$order_date" }
                        },
                        totalSales: { $sum: "$total_amount" }
                    }
                },
                { $sort: { "_id.year": 1, "_id.month": 1 } }
            ]);

            if (!monthlySales) throw new Error("No orders")
            return monthlySales

        } catch (error) {
            throw error
        }
    }
}

export default reportRepository