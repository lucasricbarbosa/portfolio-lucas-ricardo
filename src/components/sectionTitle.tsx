interface sectionTitleProps {
  text: string
}

export function SectionTitle({ text }: sectionTitleProps) {
  return (
    <h4 className="scroll-m-20 pb-6 text-xl font-semibold tracking-tight">
      {text}
    </h4>
  )
}
