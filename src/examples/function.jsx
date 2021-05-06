export default function Card(props) {
    const { children, title } = props;
  
    return (
      <div className="card">
        <div className="title">{title}</div>
        <div className="content">{children}</div>
      </div>
    );
  }