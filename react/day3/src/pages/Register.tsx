import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

const User = z.object({
  firstName: z.string().trim().min(1, "First name required"),
  lastName: z.string().trim().min(1, "Last name required"),
  email: z.string().email("Invalid email").trim().min(1, "Email required"),
  contactNumber: z.number().nullable().optional(),
  role: z.enum(["developer", "teacher"]),
  skill: z.array(z.string().min(1)).min(1, "At least one skill required"),
  message: z.string().optional()
})

type RegisterProps = { setUser: (data: UserData) => void }

export type UserData = z.infer<typeof User>
const roles = User.shape.role.options;

export default function Register({ setUser }: RegisterProps) {
  const [skillInput, setSkillInput] = useState<string>("")

  const { control, handleSubmit, formState: { errors }, setValue, getValues } = useForm<UserData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: undefined,
      role: "developer",
      skill: [],
      message: "",
    },
    resolver: zodResolver(User),
  })

  const addSkill = () => {
    const newSkill = skillInput.trim()
    if (newSkill !== "") {
      const current = getValues("skill") || []
      if (!current.includes(newSkill)) {
        setValue("skill", [...current, newSkill])
      }
      setSkillInput("")
    }
  }

  const removeSkill = (index: number, currentSkills: string[]) => {
    const newSkills = [...currentSkills]
    newSkills.splice(index, 1)
    setValue("skill", newSkills)
  }

  const onSubmit = (data: UserData) => setUser(data)

  return (
    <>

      <Card className="max-w-xl mx-auto mt-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <div>
                  <Input placeholder="First Name" {...field} />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
              )}
            />

            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <div>
                  <Input placeholder="Last Name" {...field} />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div>
                  <Input placeholder="Email" {...field} />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
              )}
            />

            <Controller
              name="contactNumber"
              control={control}
              render={({ field }) => (
                <div>
                  <Input
                    type="number"
                    placeholder="Contact Number"
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : null)}
                  />
                  {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>}
                </div>
              )}
            />

            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <div>
                  <select {...field} className="w-full border rounded-md p-2">
                    {roles.map((role) => (
                      <option value={role} key={role}>
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </option>
                    ))}
                  </select>
                  {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                </div>
              )}
            />

            <Controller
              name="skill"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Enter a skill"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addSkill()
                        }
                      }}
                    />
                    <Button type="button" onClick={addSkill}>
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {field.value?.map((skill, index) => (
                      <span
                        key={index}
                        className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(index, field.value)}
                          className="ml-2 text-blue-500 hover:text-red-500"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                  {errors.skill && <p className="text-red-500 text-sm">{errors.skill.message}</p>}
                </div>
              )}
            />

            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <div>
                  <textarea
                    {...field}
                    placeholder="Your message"
                    className="w-full border rounded-md p-2"
                    rows={3}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>
              )}
            />

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
