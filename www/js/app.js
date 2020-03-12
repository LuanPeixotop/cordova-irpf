$("#calcular").click(function () {
  salario_bruto = $("#salario_bruto").val().trim() != "" ? parseFloat($("#salario_bruto").val()) : 0

  aliquota = 0
  parcela_reduzir_imposto = 0

  if (salario_bruto < 1903.98) {
    tem_imposto = false
  } else if (salario_bruto < 2826.65) {
    tem_imposto = true
    aliquota = 0.075
    parcela_reduzir_imposto = 142.8
  } else if (salario_bruto < 3751.05) {
    tem_imposto = true
    aliquota = 0.15
    parcela_reduzir_imposto = 354.8
  } else if (salario_bruto < 4664.68) {
    tem_imposto = true
    aliquota = 0.225
    parcela_reduzir_imposto = 636.13
  } else {
    tem_imposto = true
    aliquota = 0.275
    parcela_reduzir_imposto = 869.36
  }

  salario_liquido = salario_bruto

  if (tem_imposto) {
    plano_saude = 0
    nro_dependentes = $("#numero_dependentes").val().trim() != "" ? parseInt($("#numero_dependentes").val()) : 0
    vale_refeicao = $("#vale_refeicao").val().trim() != "" ? parseFloat($("#vale_refeicao").val()) : 0
    plano_saude = $("#plano_saude").val().trim() != "" ? parseFloat($("#plano_saude").val()) : 0
    contribuicao_sindical = $("#contribuicao_sindical").val().trim() != "" ? parseFloat($("#contribuicao_sindical").val()) : 0

    teto_inss = 671.72
    qtd_reduzir_dependente = nro_dependentes * 189.59

    irpf = ((salario_bruto - teto_inss - qtd_reduzir_dependente) * aliquota) - parcela_reduzir_imposto

    salario_liquido = salario_bruto - teto_inss - irpf - vale_refeicao - plano_saude
    salario_liquido = salario_liquido.toFixed(2)
  }

  $("#salario_liquido").val(salario_liquido)
});