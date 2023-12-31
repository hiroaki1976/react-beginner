export const ColorfulMessage = (props) => {
    console.log('--ColorfulMessage--');
    const { color, children } = props;// 分割代入
    const contentStyleA = {
        color,// オブジェクトの省略記法
        fontSize: '18px'
    };

    return (
        <p style={contentStyleA}>{children}</p>
    )
}