import { trpc } from "~/trpc/client"

export function useCreateUser() {
  const { mutateAsync, status, mutate, isSuccess, isError } = trpc.auth.createUser.useMutation()

  return { mutateAsync, status, mutate, isSuccess, isError }
}

export function useLoginUser() {
  const { mutateAsync, status, mutate, isSuccess, isError } = trpc.auth.loginUser.useMutation()

  return { mutateAsync, status, mutate, isSuccess, isError }
}
