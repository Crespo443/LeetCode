function memoize(fn) {
    const cached = {}
    return function(...args) {
        const key = args.join()
        if (key in cached) {
            return cached[key]
        }
        cached[key] = fn(...args)
        return cached[key]
    }
}