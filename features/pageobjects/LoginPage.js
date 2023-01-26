class LoginPage {

    get btnEntrarSemLogin () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.RelativeLayout[2]/android.widget.TextView');
    }

    async entrarSemLogin () {
        await this.btnEntrarSemLogin.click();
    }

}

module.exports = new LoginPage();
