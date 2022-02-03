def vanl(n):
    print(n)
    if (n <= 1):
        return 1

    else:
        return (n * vanl(n-1))


n = int(input("Введите число:"))
print("vanlчисла равен:")
print(vanl(n))
