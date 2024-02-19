const template = document.createElement("template")
template.innerHTML = `
<body> 
 <slot></slot>
</body>

<stlyle>

</style>
`;




class MyTaskList extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true))

  }
    
  }

customElements.define('my-task-list', MyTaskList);
