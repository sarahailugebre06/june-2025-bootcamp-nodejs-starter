"use client"

import type React from "react"

import { useState,useEffect} from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { BookOpen, Eye, EyeOff } from "lucide-react"
import { API_BASE_URL } from "../../src/config";
import { useAuth } from "@/src/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter()
  const { setUser } = useAuth();
const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (formData.password !== formData.confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   if (!formData.agreeToTerms) {
//     alert("Please agree to the terms and conditions");
//     return;
//   }

//   setIsLoading(true);

//   try {
//     const res = await fetch(`${API_BASE_URL}/auth/register`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.error || "Registration failed");
//     }

//     // ✅ Save JWT token and user info locally
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("user", JSON.stringify(data.user));

//     // ✅ Update global AuthContext
//     setUser(data.user);

//     alert(`Welcome, ${data.user.name}! Your account has been created.`);
//     router.push("/dashboard"); // Redirect to dashboard right after registration
//   } catch (err: any) {
//     alert(err.message);
//   } finally {
//     setIsLoading(false);
//   }
// };


// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (formData.password !== formData.confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   if (!formData.agreeToTerms) {
//     alert("Please agree to the terms and conditions");
//     return;
//   }

//   setIsLoading(true);

//   try {
//     const res = await fetch(`${API_BASE_URL}/auth/register`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.error || "Registration failed");
//     }

//     alert("Account created successfully! Please log in.");
//     router.push("/login");
//   } catch (err: any) {
//     alert(err.message);
//   } finally {
//     setIsLoading(false);
//   }
// };
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   if (formData.password !== formData.confirmPassword) {
  //     alert("Passwords do not match")
  //     return
  //   }

  //   if (!formData.agreeToTerms) {
  //     alert("Please agree to the terms and conditions")
  //     return
  //   }

  //   setIsLoading(true)

  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsLoading(false)
  //     router.push("/dashboard")
  //   }, 1500)
  // }


// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (formData.password !== formData.confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   if (!formData.agreeToTerms) {
//     alert("Please agree to the terms and conditions");
//     return;
//   }

//   setIsLoading(true);

//   try {
//     const res = await fetch(`${API_BASE_URL}/auth/register`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.error || "Registration failed");
//     }

//     // Save JWT token and user info locally
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("user", JSON.stringify(data.user));

//     // Update global AuthContext
//     setUser(data.user);

//     alert(`Welcome, ${data.user.name}! Your account has been created.`);

//     // ✅ Use startTransition for safe navigation
//     startTransition(() => {
//       router.push("/dashboard");
//     });
//   } catch (err: any) {
//     alert(err.message);
//   } finally {
//     setIsLoading(false);
//   }
// };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (!formData.agreeToTerms) {
    alert("Please agree to the terms and conditions");
    return;
  }

  setIsLoading(true);

  try {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Registration failed");
    }

    // Save JWT token and user info locally
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    // Update global AuthContext
    setUser(data.user);

    alert(`Welcome, ${data.user.name}! Your account has been created.`);

    // ✅ Set redirect state instead of navigating immediately
    setRedirect(true);
  } catch (err: any) {
    alert(err.message);
  } finally {
    setIsLoading(false);
  }
};

// Use useEffect to navigate after render
useEffect(() => {
  if (redirect) {
    router.push("/dashboard");
  }
}, [redirect, router]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-primary">
            <BookOpen className="h-8 w-8" />
            <span>Read for Change</span>
          </Link>
          <p className="text-muted-foreground">Join our community of learners</p>
        </div>

        {/* Register Form */}
        <Card>
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>Sign up to start reviewing and discovering books</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
