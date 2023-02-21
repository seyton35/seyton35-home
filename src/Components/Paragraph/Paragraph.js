import './Paragraph.css'

export default function Paragraph({ children, className, pre = false }) {
    console.log(children);
    return (
        <div className={"paragraph " + className}>
            {pre
                ? <pre className="paragraph__txt">
                    {children}
                </pre>
                : <div className="paragraph__txt">
                    {children}
                </div>
            }
        </div>
    )
}