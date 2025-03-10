
const SectionHeadline = ({title}:{title:string}) => {
  return (
    <div>
        <section className="bg-gradient-to-r from-green-400 via-green-600 to-green-400 text-white text-center">
      <h2 className="text-3xl font-serif  font-bold leading-tight mb-4 py-1">
        {title}
      </h2>
    </section>
    </div>
  )
}

export default SectionHeadline