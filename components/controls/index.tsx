import { useStore } from '@/store'
import clsx from 'clsx'

export function Controls() {
  const store = useStore()
  return (
    <div className="absolute left-3 top-3  z-10 grid h-fit w-fit">
      <button
        onClick={() => store.setMode('translate')}
        className={clsx('border-b p-2', {
          'bg-card fill-card-foreground': store.mode !== 'translate',
          'bg-secondary ': store.mode === 'translate',
        })}
      >
        <svg className="h-4 w-4" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="m256 0c-1.2452 0-2.4586 0.12791-3.6387 0.35156-0.0659 0.012567-0.13349 0.018008-0.19922 0.03125-0.57894 0.11595-1.146 0.26357-1.7051 0.42969-0.047 0.01399-0.0957 0.022767-0.14258 0.037109-1.8151 0.55436-3.5159 1.3682-5.0625 2.3965-0.0312 0.020703-0.0646 0.037706-0.0957 0.058594-0.32576 0.21931-0.63201 0.46307-0.94336 0.70117-0.70605 0.53787-1.3906 1.1059-2.0234 1.7422l-75.18 75.828c-7.563 7.628-7.5048 19.937 0.11718 27.5 7.628 7.557 19.941 7.5048 27.498-0.11719l41.932-42.291v169.89h-169.88l42.295-41.926c7.622-7.563 7.6782-19.87 0.11523-27.498s-19.876-7.6802-27.498-0.11719l-75.828 75.18c-0.00297 3e-3 -0.00485 7e-3 -0.00781 0.01-2.2463 2.2302-3.9501 5.0041-4.8984 8.1094-0.004708 0.0154-0.007049 0.0315-0.011719 0.0469-0.17839 0.58935-0.3326 1.1892-0.45508 1.8008-0.013248 0.0657-0.018677 0.13332-0.03125 0.19922-0.10655 0.56223-0.19883 1.1288-0.25586 1.707-0.062671 0.63522-0.095706 1.2794-0.095706 1.9314s0.033035 1.2962 0.095703 1.9316c0.057025 0.57824 0.14931 1.1448 0.25586 1.707 0.012572 0.0659 0.018003 0.13349 0.03125 0.19922 0.11595 0.57894 0.26357 1.146 0.42969 1.7051 0.014761 0.0496 0.023909 0.10093 0.039062 0.15039 0.56503 1.8473 1.396 3.5783 2.4512 5.1465 0.35511 0.52775 0.73293 1.0381 1.1367 1.5274 0.00265 3e-3 0.00516 7e-3 0.00781 0.01 0.067158 0.0815 0.14629 0.15391 0.21484 0.23438 0.33891 0.39681 0.68535 0.78801 1.0547 1.1562 0.01376 0.0137 0.025257 0.0293 0.039063 0.043l75.826 75.18c3.791 3.753 8.7375 5.6328 13.689 5.6328 5.003 0 10.007-1.9189 13.805-5.7559 7.563-7.628 7.5048-19.935-0.11719-27.498l-42.289-41.926h169.89v169.89l-41.926-42.289c-7.557-7.635-19.87-7.667-27.498-0.12305-7.622 7.563-7.6802 19.872-0.11719 27.5l75.18 75.826c3e-3 3e-3 7e-3 5e-3 0.01 8e-3 1.3458 1.3556 2.8885 2.5158 4.584 3.4297 0.0637 0.0343 0.13128 0.0602 0.19532 0.0937 0.50006 0.26239 1.0086 0.50958 1.5332 0.72852 0.0287 0.012 0.0591 0.0194 0.0879 0.0312 0.55148 0.22706 1.1139 0.43292 1.6894 0.60937 0.13059 0.0401 0.26501 0.0662 0.39649 0.10352 0.48459 0.13741 0.97149 0.26916 1.4707 0.36914 0.0657 0.0132 0.13332 0.0187 0.19922 0.0312 1.1798 0.22361 2.3932 0.35152 3.6384 0.35152 1.8194 0 3.572-0.26909 5.2422-0.73633 0.15543-0.0435 0.31454-0.0738 0.46875-0.12109 1.1011-0.33792 2.1539-0.78025 3.1621-1.2988 0.11472-0.0588 0.23407-0.10685 0.34765-0.16797 0.37259-0.20111 0.72848-0.42812 1.0859-0.65234 0.1868-0.11676 0.38143-0.22052 0.56445-0.34375 0.10467-0.0707 0.19953-0.15388 0.30274-0.22657 0.93571-0.65673 1.8271-1.3857 2.6445-2.209l75.18-75.826c7.556-7.628 7.503-19.937-0.125-27.5-7.635-7.557-19.941-7.505-27.498 0.12305l-41.932 42.299v-169.9h169.89l-42.293 41.926c-7.628 7.563-7.68 19.87-0.12305 27.498 3.804 3.837 8.8076 5.7559 13.811 5.7559 4.945 0 9.8984-1.8808 13.689-5.6328l75.826-75.18c0.0141-0.014 0.0269-0.0289 0.041-0.043 0.2515-0.2508 0.48121-0.52292 0.71875-0.78711 0.18447-0.20534 0.38168-0.40105 0.55664-0.61328 0.404-0.48955 0.78339-0.9993 1.1387-1.5274 0.0249-0.0371 0.0437-0.0779 0.0684-0.11523 0.32713-0.4935 0.63802-0.99972 0.91992-1.5234 0.0324-0.0604 0.0561-0.12484 0.0879-0.18555 0.26306-0.50133 0.51109-1.0112 0.73047-1.5371 0.0125-0.0301 0.0208-0.0617 0.0332-0.0918 0.22497-0.54707 0.42834-1.105 0.60352-1.6758 0.0473-0.15419 0.0776-0.31334 0.12109-0.46875 0.13019-0.46537 0.25974-0.93139 0.35547-1.4102 0.0128-0.0637 0.0171-0.12948 0.0293-0.19336 0.22362-1.1801 0.35153-2.3934 0.35153-3.6386 0-1.3125-0.13302-2.5925-0.38086-3.832-4e-4 -2e-3 -2e-3 -4e-3 -2e-3 -6e-3 -0.0955-0.47674-0.22387-0.94085-0.35352-1.4043-0.0435-0.15541-0.0738-0.31456-0.12109-0.46875-0.18478-0.60207-0.39663-1.192-0.63672-1.7676-5.6e-4 -1e-3 -1e-3 -3e-3 -2e-3 -4e-3 -0.24542-0.58801-0.51657-1.1617-0.81641-1.7188-2e-3 -3e-3 -4e-3 -6e-3 -6e-3 -0.01-0.30165-0.55963-0.62921-1.1039-0.98242-1.6289-8e-4 -1e-3 -1e-3 -3e-3 -2e-3 -4e-3 -0.35459-0.52676-0.73364-1.035-1.1367-1.5234-0.17496-0.21223-0.37217-0.40794-0.55664-0.61328-0.23754-0.26419-0.46725-0.53631-0.71875-0.78711-0.0141-0.014-0.0269-0.029-0.041-0.043l-75.826-75.18c-7.635-7.563-19.943-7.5048-27.5 0.11718-7.557 7.628-7.505 19.935 0.12305 27.498l42.295 41.932h-169.89v-169.89l41.926 42.289c3.804 3.837 8.8076 5.7559 13.811 5.7559 4.945 0 9.8955-1.8738 13.688-5.6328 7.628-7.563 7.68-19.872 0.12304-27.5l-75.18-75.826c-0.0137-0.013805-0.0292-0.025303-0.043-0.039063-0.44175-0.44306-0.90413-0.86662-1.3867-1.2656-5e-3 -0.00382-9e-3 -0.0079-0.0137-0.011719-3.3608-2.7735-7.6688-4.4395-12.367-4.4395z" />
        </svg>
      </button>

      <button
        onClick={() => store.setMode('rotate')}
        className={clsx('border-b   p-2', {
          'bg-card fill-card-foreground': store.mode !== 'rotate',
          'bg-secondary': store.mode === 'rotate',
        })}
      >
        <svg className="h-4 w-4" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="m247.8 474.12c61.315 0 112.09-26.692 147.65-59.495l-1.6947 75.58c-0.17697 10.509 8.2063 19.178 18.721 19.349h0.32318c10.364 0 18.855-8.3198 19.033-18.721l2.5382-126.18c0.0827-5.1592-1.9294-10.135-5.5843-13.784-3.6492-3.6492-8.5987-5.6603-13.784-5.5718l-126.73 2.5383c-10.509 0.18371-18.885 8.8469-18.708 19.362 0.17794 10.401 8.6689 18.714 19.032 18.714h0.32991l83.195-1.7957c-29.35 27.815-72.656 51.93-124.33 51.93-105.91 0-177.05-91.548-177.05-177.05-0.31704-10.248-6.2951-19.251-18.532-19.479-12.237-0.22764-19.196 8.1831-19.543 19.486 0 103.89 86.446 215.13 215.13 215.13zm4.3538-435.25c-61.315 0-112.09 26.692-147.65 59.495l1.6947-75.579c0.17698-10.509-8.2063-19.178-18.721-19.349h-0.32317c-10.364 0-18.855 8.3198-19.033 18.721l-2.5383 126.18c-0.08272 5.1592 1.9294 10.135 5.5844 13.784 3.6492 3.6492 8.5987 5.6603 13.784 5.5719l126.73-2.5383c10.509-0.18371 18.885-8.8469 18.708-19.362-0.17794-10.401-8.6689-18.714-19.032-18.714h-0.32991l-83.195 1.7957c29.35-27.815 72.656-51.93 124.33-51.93 105.91 0 177.05 91.548 177.05 177.05 0.31703 10.248 6.2951 19.251 18.532 19.479 12.237 0.22763 19.196-8.1831 19.543-19.486 0-103.89-86.446-215.13-215.13-215.13z" />
        </svg>
      </button>
      <button
        onClick={() => store.setMode('scale')}
        className={clsx(' p-2', {
          'bg-card fill-card-foreground': store.mode !== 'scale',
          'bg-secondary': store.mode === 'scale',
        })}
      >
        <svg className="h-4 w-4" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="m450.25 44.182-133.13 1.1699c-9.691 0.076-17.482 7.9849-17.406 17.67 0.076 9.638 27.155 17.4 17.535 17.4h0.1289l90.35-0.84375-116.88 116.87c-6.85 6.844-6.85 17.949 0 24.793 3.425 3.425 7.9075 5.1387 12.396 5.1387 4.483 0 8.9734-1.7137 12.398-5.1387l116.87-116.88-0.84179 90.344c-0.07 9.685 7.7193 17.594 17.404 17.67h0.12891c9.62 0 17.459-7.7624 17.535-17.4l1.168-133.13c1.3e-4 -0.01637-2e-3 -0.03246-2e-3 -0.04883 3e-3 -0.51471-0.0239-1.0297-0.0664-1.543-4e-3 -0.05325-9.6e-4 -0.10695-6e-3 -0.16016-2.4e-4 -0.0027-2e-3 -0.0051-2e-3 -0.0078-0.26224-2.8345-1.2132-5.6145-2.8516-8.0742-0.31876-0.47858-0.66235-0.94631-1.0332-1.3984-0.36831-0.45029-0.76079-0.88383-1.1758-1.2988-0.41658-0.41735-0.85218-0.81156-1.3047-1.1816-0.24176-0.19804-0.49656-0.36957-0.7461-0.55273-0.21514-0.15762-0.42293-0.32538-0.64453-0.47266-0.35614-0.23723-0.72494-0.4459-1.0938-0.6543-0.12574-0.07096-0.24567-0.15292-0.37304-0.2207-0.42481-0.22631-0.86059-0.42442-1.2988-0.61328-0.0824-0.03554-0.16117-0.07901-0.24414-0.11328-0.42706-0.17629-0.86181-0.32571-1.2988-0.4668-0.10761-0.03483-0.21201-0.07858-0.32031-0.11133-0.37604-0.11341-0.75724-0.19952-1.1387-0.28711-0.18044-0.04161-0.35715-0.09494-0.53906-0.13086-0.30867-0.06068-0.62071-0.09471-0.93164-0.13867-0.25679-0.03651-0.51062-0.0862-0.76953-0.11133-0.56319-0.0544-1.128-0.08394-1.6934-0.08398zm-387.45 255.62c-9.62 0-17.459 7.7663-17.535 17.404l-1.1699 133.12c-1.22e-4 0.0164 2e-3 0.0325 2e-3 0.0488-0.0025 0.51395 0.02395 1.0285 0.06641 1.541 0.0046 0.0557 0.0026 0.11233 0.0078 0.16797 0.31299 3.3855 1.6059 6.695 3.8809 9.4727 0.3666 0.44761 0.75628 0.88287 1.1738 1.3008h2e-3c0.20731 0.20728 0.42966 0.38925 0.64453 0.58398 0.21795 0.19755 0.42764 0.40626 0.6543 0.5918 0.29789 0.24417 0.61028 0.46004 0.91992 0.68164 0.15919 0.11373 0.31004 0.23952 0.47266 0.34766 0.37454 0.24954 0.76185 0.46983 1.1504 0.6875 0.10897 0.061 0.21208 0.1328 0.32227 0.1914 0.38726 0.20616 0.78506 0.38353 1.1836 0.5586 0.12552 0.0552 0.24628 0.12161 0.37305 0.17382 0.36908 0.15187 0.74642 0.27673 1.123 0.40235 0.16645 0.0556 0.32796 0.12318 0.49609 0.17383 0.46956 0.14111 0.94417 0.25454 1.4219 0.35547 0.07285 0.0154 0.14372 0.0382 0.2168 0.0527 0.4682 0.0927 0.94102 0.15666 1.4141 0.21094 0.09821 0.0113 0.19446 0.0313 0.29297 0.041 0.57076 0.0558 1.6783-0.48578 1.7168 0.0859h0.13477l133.13-1.1699c9.685-0.07 17.476-7.9831 17.4-17.662-0.076-9.69-8.1259-17.387-17.67-17.404l-90.338 0.83996 116.87-116.87c6.844-6.844 6.85-17.943 0-24.793s-17.955-6.85-24.799 0l-116.87 116.86 0.84375-90.344c0.076-9.679-7.7154-17.586-17.4-17.662z" />
        </svg>
      </button>
    </div>
  )
}
