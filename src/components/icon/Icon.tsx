import { ICON_DEFAULTS } from "../../config"

export const Icon: React.FC<{iconName: string, size?: string, color?: string}> = ({iconName, size, color}) => {

  const ICON_SIZE: {[key: string]: string} = {
    XXL: "60px",
    XL: "50px",
    L: "40px",
    M: "30px",
    S: "20px",
    S2: "14px",
    XS: "10px",
  }

  switch(iconName) {
  case "instrument": return <svg fill={color || ICON_DEFAULTS.color} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" width={ICON_SIZE[size || ICON_DEFAULTS.size]} viewBox="0 0 512 512"><g><path d="M104.426,139.813l83.563,83.781c14.344-13.766,26.781-25.703,36.109-34.672l-84.297-84.5l-10.313-45.719L54.27,12.985L33.629,33.642L12.988,54.282l45.719,75.219L104.426,139.813z"/><path d="M358.363,276.298L481.926,399.47c22.781,22.766,22.781,59.688,0,82.469c-22.781,22.766-59.688,22.766-82.469,0L275.895,358.767L358.363,276.298z"/><path d="M459.957,203.407c42.547-38.609,49.656-82.484,40.141-119.484c-0.281-2.938-0.984-5.406-3.547-7.25l-8.563-7.016c-1.484-1.391-3.484-2.063-5.484-1.875c-2.016,0.203-3.844,1.234-5.031,2.875l-49.25,64.031c-1.375,1.891-3.594,2.969-5.922,2.891l-17.875,1.313c-1.531-0.047-3.016-0.594-4.219-1.563l-34.531-29.266c-1.406-1.141-2.328-2.766-2.563-4.563l-2.141-16.188c-0.25-1.781,0.203-3.594,1.266-5.063l46.109-62.641c2.094-2.875,1.688-6.859-0.906-9.281l-11.188-8.75c-2.188-2.031-4.672-1.75-8.063-1.094c-31.844,6.281-86.219,37.125-100.016,79.75c-12.156,37.516-7.922,63.969-7.922,63.969c0,21.141-6.953,41.516-15.5,50.063L24.504,424.923c-0.469,0.422-0.922,0.859-1.375,1.313c-19.844,19.844-19.813,52.047-0.641,71.219s51.859,19.672,71.703-0.172c0.922-0.922,1.813-1.875,2.641-2.859l231.672-250.438C357.004,218.61,413.426,245.642,459.957,203.407z"/></g></svg>
  case "project": return <svg width={ICON_SIZE[size || ICON_DEFAULTS.size]} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true"><path fill={color || ICON_DEFAULTS.color} d="M8 6H5c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zM13 10H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zM13 14H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z"/><path fill={color || ICON_DEFAULTS.color} d="M18 2v8c0 .55-.45 1-1 1s-1-.45-1-1V2.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5v19c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V21c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h14c1.1 0 2 .9 2 2z"/><path fill={color || ICON_DEFAULTS.color} d="M23.87 11.882c.31.54.045 1.273-.595 1.643l-9.65 5.57c-.084.05-.176.086-.265.11l-2.656.66c-.37.092-.72-.035-.88-.314-.162-.278-.09-.65.17-.913l1.907-1.958c.063-.072.137-.123.214-.167.004-.01.012-.015.012-.015l9.65-5.57c.64-.37 1.408-.234 1.72.305l.374.65z"/></svg>
  case "typescript": return <svg width={ICON_SIZE[size || ICON_DEFAULTS.size]} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_typescript_official</title><rect x="2" y="2" width="28" height="28" rx="1.312" style={{fill: "#3178c6"}}/><path d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z" style={{fill:"#ffffff", fillRule:"evenodd"}}/></svg>
  case "react": return <svg width={ICON_SIZE[size || ICON_DEFAULTS.size]} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/><path fillRule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/></svg>
  case "redux": return <svg width={ICON_SIZE[size || ICON_DEFAULTS.size]} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7868 21.556C22.8939 21.4433 23.7338 20.505 23.6956 19.3789C23.6575 18.253 22.703 17.3522 21.5577 17.3522H21.4814C20.2978 17.3897 19.3817 18.3656 19.4199 19.5291C19.4581 20.0921 19.6871 20.58 20.0307 20.9178C18.7327 23.4326 16.7475 25.2717 13.7698 26.8106C11.7464 27.8615 9.6468 28.2369 7.54715 27.9742C5.82918 27.749 4.49301 26.9984 3.65301 25.7596C2.43144 23.9205 2.31695 21.9312 3.34773 19.942C4.07312 18.5157 5.21828 17.4647 5.94367 16.9392C5.79098 16.4513 5.56187 15.6256 5.44738 15.0251C-0.0882044 18.9661 0.484491 24.2959 2.16426 26.8106C3.42402 28.6873 5.98187 29.8509 8.80691 29.8509C9.57039 29.8509 10.3339 29.7757 11.0975 29.5882C15.9841 28.6498 19.6872 25.7972 21.7868 21.556ZM28.5059 16.9018C25.6045 13.5613 21.3287 11.7222 16.4421 11.7222H15.8314C15.4878 11.0466 14.7624 10.5961 13.9607 10.5961H13.8843C12.7009 10.6337 11.7848 11.6095 11.8229 12.7731C11.8611 13.8991 12.8154 14.7999 13.9607 14.7999H14.037C14.8769 14.7624 15.6023 14.2369 15.9077 13.5237H16.5948C19.4963 13.5237 22.2449 14.3494 24.7265 15.9634C26.6352 17.202 28.0096 18.816 28.7731 20.7677C29.4221 22.3441 29.3839 23.883 28.6967 25.1967C27.6278 27.1859 25.8336 28.2744 23.4666 28.2744C21.9395 28.2744 20.4889 27.824 19.7253 27.4862C19.3054 27.8615 18.5418 28.462 18.0073 28.8375C19.649 29.5881 21.3287 30.001 22.9321 30.001C26.597 30.001 29.3076 28.0116 30.3384 26.0224C31.4454 23.8454 31.369 20.0921 28.5059 16.9018ZM9.1123 22.1939C9.15051 23.3199 10.1049 24.2206 11.2502 24.2206H11.3266C12.51 24.1832 13.4262 23.2073 13.388 22.0438C13.3499 20.9177 12.3954 20.017 11.2502 20.017H11.1739C11.0975 20.017 10.9829 20.017 10.9067 20.0544C9.3414 17.5022 8.69242 14.7248 8.92152 11.7221C9.0741 9.47006 9.83769 7.51828 11.1739 5.9043C12.2809 4.51555 14.4188 3.83996 15.8696 3.80252C19.9162 3.7274 21.634 8.68179 21.7486 10.6711C22.2449 10.7837 23.0848 11.0465 23.6575 11.2342C23.1993 5.15382 19.3817 2.00098 15.7169 2.00098C12.2809 2.00098 9.1123 4.44067 7.85242 8.04387C6.09637 12.8481 7.24164 17.4647 9.37949 21.1055C9.18871 21.3682 9.0741 21.7811 9.1123 22.194V22.1939Z" fill="#764ABC"/></svg>
  case "contacts": return <svg fill={color || ICON_DEFAULTS.color} width={ICON_SIZE[size || ICON_DEFAULTS.size]} version="1.1" id="XMLID_199_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="contact-card"><g><path d="M12,20H0v-3.5c0-2.4,1.3-4.5,3.2-5.6C2.5,10.2,2,9.2,2,8.1c0-2.2,1.8-4,4-4s4,1.8,4,4c0,1.1-0.4,2.1-1.2,2.8c1.9,1.1,3.2,3.3,3.2,5.6V20z M2,18h8v-1.5c0-2.4-1.8-4.5-4-4.5c-2.1,0-4,2.1-4,4.5V18z M6,6C4.9,6,4,6.9,4,8s0.9,2,2,2s2-0.9,2-2S7.1,6,6,6z M24,17H14v-2h10V17z M21,13h-7v-2h7V13z M24,9H14V7h10V9z"/></g></g></svg>
  case "phone": return <svg fill={color || ICON_DEFAULTS.color} width={ICON_SIZE[size || ICON_DEFAULTS.size]} viewBox="0 0 32 32" style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2}} version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Layer1"><path d="M16,2c-7.727,0 -14,6.273 -14,14c0,7.727 6.273,14 14,14c7.727,0 14,-6.273 14,-14c-0,-7.727 -6.273,-14 -14,-14Zm-6.729,10.345l0.15,0.259l6.23,10.792l0.866,0.5c0,0 -0.861,-0.493 -0.861,-0.493l0.15,0.26c0.475,0.824 1.378,1.386 2.555,1.483c0.993,0.082 2.117,-0.184 3.119,-0.763c1.121,-0.647 2.118,-1.223 2.118,-1.223c0.478,-0.276 0.642,-0.887 0.366,-1.366l-2.077,-3.597c-0.276,-0.478 -0.888,-0.642 -1.366,-0.366l-0.866,0.5c0,-0 -3.846,-6.662 -3.846,-6.662c-0,0 0.866,-0.5 0.866,-0.5c0.478,-0.276 0.642,-0.888 0.366,-1.366l-2.077,-3.597c-0.276,-0.479 -0.888,-0.642 -1.366,-0.366c0,-0 -0.997,0.575 -2.118,1.223c-1.002,0.578 -1.795,1.419 -2.22,2.319c-0.505,1.068 -0.469,2.131 0.006,2.955l0.005,0.008Zm8.117,10.058l-6.39,-11.066c-0.177,-0.307 -0.118,-0.702 0.07,-1.1c0.267,-0.566 0.782,-1.079 1.412,-1.442c0,-0 1.252,-0.723 1.252,-0.723c0,-0 1.077,1.865 1.077,1.865c-0,0 -0.866,0.5 -0.866,0.5c-0.478,0.276 -0.642,0.888 -0.366,1.366l4.846,8.394c0.276,0.478 0.888,0.642 1.366,0.366l0.866,-0.5c0,-0 1.077,1.865 1.077,1.865c0,0 -1.252,0.723 -1.252,0.723c-0.63,0.364 -1.331,0.553 -1.955,0.502c-0.43,-0.035 -0.794,-0.176 -0.976,-0.47l-0.161,-0.28Z"/></g></svg>
  case "telegram": return <svg fill={color || ICON_DEFAULTS.color} width={ICON_SIZE[size || ICON_DEFAULTS.size]} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path></svg>
  case "email": return <svg fill={color || ICON_DEFAULTS.color} width={ICON_SIZE[size || ICON_DEFAULTS.size]} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd"/></svg>
  case "burger": return <svg width={ICON_SIZE[size || ICON_DEFAULTS.size]} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>70 Basic icons by Xicons.co</title><path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill={color || ICON_DEFAULTS.color} /><path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill={color || ICON_DEFAULTS.color} /><path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill={color || ICON_DEFAULTS.color} /></svg>
  case "close": return <svg width={ICON_SIZE[size || ICON_DEFAULTS.size]} viewBox="0 0 24 24" fill={color || ICON_DEFAULTS.color} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill={color || ICON_DEFAULTS.color} /></svg>
  default: return <div>404</div>
}
}