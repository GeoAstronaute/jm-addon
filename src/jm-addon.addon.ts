export class JmAddon {
    public static displayName = "JmAddon";
    public static logo = "https://thyb.github.io/materia-website-content/logo/addons/sendgrid.png"

    public static installSettings = [
        {
            name: "apikey",
            description: "Enter your apikey",
            type: "string"
        },
        {
            name: "from",
            description: "Enter the email address (sender) attached with your apikey",
            type: "string"
        }
    ];

    constructor(private app: any, private config: any, private expressApp: any) {

    }

    start() {}
}