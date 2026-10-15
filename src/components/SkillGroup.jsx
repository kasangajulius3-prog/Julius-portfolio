export default function SkillGroup({ group, index }) {
  const Icon = group.icon;
  return (
    <div
      className="skill-card"
      data-reveal
      style={{ "--delay": `${(index + 1) * 0.08}s` }}
    >
      <div className="skill-icon-wrapper">
        <Icon className="skill-icon" aria-hidden="true" />
      </div>
      <h4 className="skill-name">{group.name}</h4>
      <ul className="chip-list">
        {group.items.map((item) => (
          <li className="skill-chip" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
