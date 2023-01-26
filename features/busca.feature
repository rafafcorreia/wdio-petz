Feature: Buscar Produto

  Scenario: Como usuário anônimo, eu busco por um produto

    Given que estou na pagina de login
    When eu clico em Começar sem login
    And busco por "premier filhotes pelos longos"
    And clico na primeira opcao
    Then aparece o produto "Ração Premier Ambientes Internos Pelos Longos para Gatos Filhotes Sabor Salmão"
