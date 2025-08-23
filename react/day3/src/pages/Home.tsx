import type { UserData } from "./Register"
import { Badge } from "@/components/ui/badge"
import { Phone, Briefcase, MessageCircle, Star } from "lucide-react"

type HomeProps = {
    user: UserData
}

export default function Home({ user }: HomeProps) {
    const initials = user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()

    return (
        <div className="max-w-4xl mx-auto mt-10 px-4 space-y-6">

            <div className="flex items-center gap-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-3xl font-bold text-blue-600">
                    {initials}
                </div>
                <div>
                    <h1 className="text-3xl font-bold">{user.firstName} {user.lastName}</h1>
                    <p className="text-white/80 mt-1">{user.email}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md border">
                    <Phone className="w-8 h-8 text-blue-500" />
                    <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-lg font-semibold">{user.contactNumber || "N/A"}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md border">
                    <Briefcase className="w-8 h-8 text-green-500" />
                    <div>
                        <p className="text-gray-400 text-sm">Role</p>
                        <p className="text-lg font-semibold capitalize">{user.role}</p>
                    </div>
                </div>

                <div className="col-span-full bg-white p-6 rounded-2xl shadow-md border">
                    <div className="flex items-center gap-2 mb-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <h2 className="text-lg font-semibold">Skills</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {user.skill.map((s, i) => (
                            <Badge key={i} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                                {s}
                            </Badge>
                        ))}
                    </div>
                </div>

                {user.message && (
                    <div className="col-span-full bg-white p-6 rounded-2xl shadow-md border">
                        <div className="flex items-center gap-2 mb-2">
                            <MessageCircle className="w-5 h-5 text-purple-500" />
                            <h2 className="text-lg font-semibold">Message</h2>
                        </div>
                        <p className="text-gray-700">{user.message}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
