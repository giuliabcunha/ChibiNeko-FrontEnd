"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupCard() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitDisabled = useMemo(() => isLoading, [isLoading])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      const form = new FormData(e.currentTarget)
      const name = String(form.get("name") ?? "")
      const email = String(form.get("email") ?? "")
      const password = String(form.get("password") ?? "")
      const confirmPassword = String(form.get("confirmPassword") ?? "")

      if (password !== confirmPassword) {
        setError("As senhas não coincidem.")
        return
      }

      // TODO: conectar seu endpoint de cadastro
      // await signUp({ name, email, password })

      await new Promise((r) => setTimeout(r, 700))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-sm border border-black/10 bg-white/35 shadow-sm backdrop-blur-xl ring-1 ring-black/5 dark:border-white/10 dark:bg-black/25 dark:ring-white/10">
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
        <CardTitle className="text-4xl leading-tight tracking-tight">
          Criar conta
        </CardTitle>

        <CardAction className="mt-2">
          <Button asChild variant="link" className="px-0">
            <Link href="/login">Entrar</Link>
          </Button>
        </CardAction>
      </CardHeader>

      <form onSubmit={onSubmit} aria-busy={isLoading}>
        <CardContent className="pt-2">
          <div className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                placeholder="Seu nome"
                autoComplete="name"
                required
                disabled={submitDisabled}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="voce@exemplo.com"
                autoComplete="email"
                inputMode="email"
                required
                disabled={submitDisabled}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                disabled={submitDisabled}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirmar senha</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                disabled={submitDisabled}
              />
            </div>

            {error ? (
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            ) : null}
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-3 pt-6">
          <Button
            className="w-full bg-[#4B6B86] text-white hover:bg-[#3F5D76]"
            type="submit"
            disabled={submitDisabled}
          >
            {isLoading ? "Criando..." : "Criar conta"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
