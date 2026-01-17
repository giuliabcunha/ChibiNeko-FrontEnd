"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginCard() {
  const [isLoading, setIsLoading] = useState(false);

  const submitDisabled = useMemo(() => isLoading, [isLoading]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      const form = new FormData(e.currentTarget);
      const email = String(form.get("email") ?? "");
      const password = String(form.get("password") ?? "");

      // TODO: conecte seu auth aqui
      // await signIn({ email, password })

      await new Promise((r) => setTimeout(r, 700));
    } finally {
      setIsLoading(false);
    }
  }

  return (
<Card className="w-full max-w-sm border border-black/10 bg-transparent shadow-none backdrop-blur-xl dark:border-white/10">
      <CardHeader className="space-y-1">
        <CardTitle className="text-4xl">Entrar</CardTitle>
        

        <CardAction className="mt-1">
          <Button asChild variant="link" className="px-0">
            <Link href="/signup">Criar conta</Link>
          </Button>
        </CardAction>
      </CardHeader>

      <form onSubmit={onSubmit} aria-busy={isLoading}>
        <CardContent>
          <div className="flex flex-col gap-5">
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
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>

              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                disabled={submitDisabled}
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-3 pt-6">
          <Button className="w-full" type="submit" disabled={submitDisabled}>
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
