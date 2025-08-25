import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import type { Dispatch, SetStateAction } from "react"


import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface LoginProps {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export default function Login({ setIsLoggedIn }: LoginProps) {
    const [loginError, setLoginError] = useState<string | null>(null)

    const UserSchema = z.object({
        username: z.string().trim().min(1, "Username required"),
        password: z.string().trim().min(1, "Password required"),
    })

    type UserData = z.infer<typeof UserSchema>

    const { formState: { errors }, handleSubmit, control } = useForm<UserData>({
        defaultValues: { username: "", password: "" },
        resolver: zodResolver(UserSchema),
    })

    const onSubmit: SubmitHandler<UserData> = (data) => {
        if (data.username === "admin" && data.password === "admin123") {
            setLoginError(null)
            setIsLoggedIn(true)
        } else {
            setLoginError("Invalid credentials. Please try again.")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-[400px] shadow-xl">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
                </CardHeader>

                <CardContent>
                    {loginError && (
                        <Alert variant="destructive" className="mb-4">
                            <ExclamationTriangleIcon className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{loginError}</AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Label htmlFor="username">Username</Label>
                            <Controller
                                name="username"
                                control={control}
                                render={({ field }) => <Input id="username" {...field} />}
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm">{errors.username.message}</p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <Input id="password" type="password" {...field} />}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>

                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                </CardContent>

                <CardFooter className="justify-center">
                    <p className="text-sm text-gray-500">Enter <b>admin / admin123</b> to login</p>
                </CardFooter>
            </Card>
        </div>
    )
}
