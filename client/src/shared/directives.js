function fallbackImg(el, binding) {
  try {
    const { value } = binding
    const loader = "../../static/gifs/loading.gif"
    const fallBackImage = "../../static/icons/dyk-logo.svg"
    const img = new Image()
    let loading = loader
    let error = fallBackImage
    let original = el.src
    if (typeof value === "string") {
      loading = value
      error = value
    }
    if (value instanceof Object) {
      loading = value.imageLoader || loader
      error = value.fallBackImage || fallBackImage
    }
    img.src = original
    el.src = loading

    const observer = new IntersectionObserver(
      function (entries, self) {
        // iterate over each entry
        entries.forEach((entry) => {
          // process just the images that are intersecting.
          // isIntersecting is a property exposed by the interface
          if (entry.isIntersecting) {
            // custom function that copies the path to the img
            // from data-src to src
            preloadImage(entry.target)
            // the image is now in place, stop watching
            self.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0,
      },
    )
    observer.observe(el)

    function preloadImage(img) {
      img.src = original
    }

    img.onerror = () => {
      el.src = error
    }
  } catch (e) {
    console.log(e)
  }
}

export { fallbackImg }
