class HomePage {

    get barraPesquisa () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView');
    }

    get barraPesquisaParaEscrever () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText');
    }

    get primeiraOpcao () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView');
    }

    async pesquisarProduto (texto) {
        await this.barraPesquisa.waitForDisplayed();
        await this.barraPesquisa.click();
        await this.barraPesquisaParaEscrever.waitForDisplayed();
        // await this.barraPesquisaParaEscrever.clear();
        await this.barraPesquisaParaEscrever.setValue(texto);
    }

    async clicarPrimeiraOpcao () {
        await this.primeiraOpcao.click();
    }
}

module.exports = new HomePage();
