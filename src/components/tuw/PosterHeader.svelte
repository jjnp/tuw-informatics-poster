<script lang="ts">
import ResearchGroupLogo from "./ResearchGroupLogo.svelte";

// export let thesisTitle: string | undefined = 'Your Thesis Title Comes Here And It May Be Double-Spaced If Necessary'
// export let author: string | undefined = '[Fill in your full name]'
// export let programTitle: string | undefined = '[Fill in official name of Masters program]'
// export let institute: string | undefined = '[Fill in official  name of institute]'
// export let researchUnit: string |  undefined = '[Fill in official name of research unit]'
// export let supervisor: string |  undefined = '[Fill in name, degrees and titles]'
// export let coSupervisors: string[] = []
// export let yourEmail: string | undefined = '[Fill in your email address, optional]'
export let thesisTitle: string | undefined = 'Improving Serverless Edge Computing for Network Bound Workloads'
export let author: string | undefined = 'Jacob Palecek'
export let programTitle: string | undefined = 'Software Engineering & Internet Computing'
export let institute: string | undefined = 'Institute of Information Systems Engineering'
export let researchUnit: string |  undefined = 'Distributed Systems Group'
export let supervisor: string |  undefined = 'Univ.Prof.Dr. Schahram Dustdar'
export let coSupervisors: string[] = ['Dr. Thomas Rausch', 'Dipl.Ing. Philipp Raith']
export let yourEmail: string | undefined = 'jacob.palecek@outlook.com'
</script>

<div class="container">
    <div class="logos">
        <!-- <img src="/tuw/informatics-logo.svg" alt="" class="logos__informatics"> -->
        <!-- <img src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4NjcgMTMwIiB2aWV3Qm94PSIwIDAgODY3IDEzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDEwMjAyIj48ZyBzdHJva2U9IiMwMTAyMDIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIuMjUiPjxwYXRoIGQ9Im0xNzYgMTE4LjJoLTMuOXYtMTA0LjJoMy45eiIvPjxwYXRoIGQ9Im0yMDQuNiA1OC45YzIuMy01LjcgNi4yLTEwLjggMTEuMi0xNC4yIDQuOC0zLjQgMTAuNS01LjMgMTYuMy01LjMgOC4yIDAgMTQuNCAyLjMgMTguNiA3LjEgNC4xIDQuOCA2LjIgMTEuOSA2LjIgMjEuM3Y1MC42aC0zLjl2LTUwLjhjMC04LjItMS44LTE0LjQtNS0xOC4zLTMuNC0zLjktOC43LTYtMTUuOC02LTYuNCAwLTEyLjggMi41LTE3LjQgNy4xLTUgNS04LjUgMTEuNS05LjggMTguM3Y0OS41aC0zLjl2LTc3LjRoMy45djE4LjF6Ii8+PHBhdGggZD0ibTI4Ni42IDExOC4ydi02Ni42aC0xMy41di0zLjloMTMuNXYtMTEuM2MwLTcuMSAxLjgtMTIuOCA1LjUtMTYuNyAzLjktNC4xIDkuMi02LjIgMTQuOS02IDMuMiAwIDYuMi41IDkuMiAxLjFsLS43IDMuN2MtMi43LS43LTUuNy0xLjEtOC41LTEuMS00LjYtLjItOC45IDEuNi0xMi4xIDUtMy4yIDMuOS00LjggOC45LTQuNCAxNC4ydjExaDIwLjR2My45aC0yMC40djY2Ljd6Ii8+PHBhdGggZD0ibTMyMSA3Ny45YzAtNi45IDEuNC0xMy43IDQuNC0xOS45IDIuNS01LjcgNi45LTEwLjMgMTIuMS0xMy43IDUuMy0zLjIgMTEuNS01IDE3LjYtNSAxMi42LS4yIDI0LjMgNi45IDI5LjUgMTguMyAzIDYuMiA0LjQgMTMuMSA0LjQgMTkuOXYzLjRjLjIgNi45LTEuNCAxMy43LTQuMSAxOS45LTIuNSA1LjctNi45IDEwLjMtMTEuOSAxMy43LTUuMyAzLjItMTEuNSA1LTE3LjYgNS0xMi42LjItMjQuMy03LjEtMjkuNS0xOC42LTMtNi4yLTQuNy0xMi44LTQuOC0xOS43IDAtLjctLjEtMi40LS4xLTMuM3ptMy42IDMuNmMuMiA2LjEgMS40IDExLjcgNC4xIDE3LjIgMi4zIDUgNiA5LjQgMTAuOCAxMi42IDQuNiAzIDEwLjEgNC42IDE1LjYgNC42IDguMi4yIDE2LjMtMy40IDIxLjUtOS44IDUuNS02LjYgOC4yLTE1LjEgOC4yLTI1Ljd2LTIuM2MwLTYuMi0xLjQtMTIuMS0zLjktMTcuNi0yLjMtNS02LTkuNC0xMC44LTEyLjYtNC42LTMtMTAuMS00LjYtMTUuNi00LjYtOC41LS4yLTE2LjUgMy40LTIxLjUgMTAuMS01LjcgNy4xLTguOSAxNi4zLTguNSAyNS40eiIvPjxwYXRoIGQ9Im00NDEuNCA0My41LTUtLjVjLTYuMi0uMi0xMi4xIDIuMS0xNi41IDYuNC00LjggNC44LTcuOCAxMS4yLTguNyAxNy45djUwLjdoLTMuOXYtNzcuMmgzLjl2MTZjMS44LTUgNS05LjYgOS40LTEyLjggNC42LTMuMiAxMC4xLTUgMTUuOC00LjggMS44IDAgMy43LjIgNS41Ljl6Ii8+PHBhdGggZD0ibTUxMS43IDExOC4yaC0zLjl2LTUyYzAtNy44LTEuOC0xMy41LTUtMTcuNC0zLjQtMy45LTguNy01LjctMTYtNS43LTguNSAwLTE2LjMgNC4xLTIwLjggMTEuMi0zLjIgNC40LTUuMyA5LjYtNi40IDE0Ljl2NDloLTMuOXYtNzcuNGgzLjl2MTguM2MyLjMtNiA2LjItMTEgMTEuMi0xNC43IDkuNi02LjYgMjIuMi02LjkgMzIuMS0uOSA0LjQgMy40IDcuMyA4LjUgOCAxNCAyLjMtNS41IDYuMi0xMC4xIDExLjItMTMuMyA1LjMtMy4yIDExLjItNSAxNy40LTUgOC4yIDAgMTQuNyAyLjMgMTguNiA3LjFzNi4yIDExLjkgNi4yIDIxLjN2NTAuNmgtMy45di01MC4yYzAtOC41LTEuNi0xNC43LTUtMTguOHMtOC43LTYtMTYtNmMtOC45LS4yLTE3LjIgNC4xLTIyLjQgMTEuMi0yLjcgMy40LTQuNiA3LjgtNS4zIDEyLjR6Ii8+PHBhdGggZD0ibTYzNy41IDExOC4yYy0xLjEtNC42LTEuNi05LjQtMS40LTE0LjItMyA1LTcuMyA4LjktMTIuNiAxMS41LTUuNSAyLjctMTEuNyA0LjEtMTcuOSA0LjEtNi4yLjItMTIuNC0xLjgtMTcuMi01LjctNC40LTMuOS02LjYtOS40LTYuNi0xNS4xIDAtNy4xIDMuNy0xMy41IDkuNi0xNy4yIDYuNC00LjQgMTQuOS02LjQgMjUuNy02LjZoMTl2LTExLjNjLjItNS43LTEuOC0xMS4yLTYuMi0xNS4xLTQuMS0zLjctOS44LTUuMy0xNy40LTUuMy02LjQtLjItMTIuNiAxLjYtMTcuNiA1LjUtNC40IDMtNy4xIDgtNy4xIDEzLjVsLTMuOS0uMmMwLTYuNCAzLjItMTIuNCA4LjItMTYgNS43LTQuNiAxMy4xLTYuOSAyMC40LTYuNiA4LjIgMCAxNC45IDIuMSAxOS45IDYuMiA1IDQuNCA3LjggMTEgNy42IDE3LjZ2MzcuMWMwIDguNS43IDE0LjIgMi4xIDE3LjR2LjdoLTQuNnptLTMxLjgtMi41YzYuNi4yIDEzLjEtMS42IDE4LjgtNC44IDUuMy0zLjIgOS40LTggMTEuNy0xMy43di0xOC40aC0xNy45Yy0xMSAwLTE5LjUgMi4zLTI1LjQgNi42LTQuNCAzLTcuMSA4LTcuMSAxMy4zIDAgNC42IDIuMSA5LjIgNS43IDEyLjEgMy44IDMuNSA4LjkgNS4xIDE0LjIgNC45eiIvPjxwYXRoIGQ9Im02NzMuNCAxNy43djIwLjhoMTcuNnYzLjloLTE3LjZ2NTcuM2MtLjIgNC4xLjcgOC41IDIuNyAxMi4xIDIuMSAyLjcgNS41IDQuNCA4LjkgMy45IDIuNSAwIDUtLjIgNy42LS43bC43IDMuN2MtMi43LjctNS4zLjktOCAuOS01LjcgMC05LjYtMS42LTEyLjEtNC42cy0zLjctOC0zLjctMTQuOXYtNTcuN2gtMTQuNHYtMy45aDE0LjR2LTIwLjh6Ii8+PHBhdGggZD0ibTcwOS45IDE3LjdjMC0xLjEuNS0yLjEgMS4xLTIuNy43LS43IDEuOC0xLjEgMi43LTEuMSAyLjMgMCAzLjkgMS44IDQuMSA0LjEgMCAxLjEtLjUgMi4xLTEuMSAyLjctLjcuNy0xLjggMS4xLTIuNyAxLjEtMi4zLS4zLTQuMS0xLjktNC4xLTQuMXptNS45IDEwMC41aC0zLjl2LTc5LjdoMy45eiIvPjxwYXRoIGQ9Im03NjcuNCAxMTUuN2M2LjIuMiAxMi40LTEuOCAxNy40LTUuNSA0LjYtMy45IDcuMy05LjQgNy42LTE1LjZoMy45Yy0uMiA3LjEtMy4yIDEzLjUtOC43IDE4LjEtNS43IDQuNi0xMi44IDcuMS0yMC4yIDYuOS04LjkuNS0xNy40LTMuNy0yMy4xLTEwLjUtNS43LTcuMS04LjUtMTYuNS04LjUtMjguNnYtMi41YzAtMTEuNyAyLjctMjEuMSA4LjUtMjguMiA1LjUtNi45IDE0LTEwLjggMjIuOS0xMC41IDcuNi0uMiAxNC43IDIuMyAyMC40IDcuMyA1LjUgNSA4LjUgMTIuMSA4LjUgMTkuN2gtMy45YzAtNi40LTIuNy0xMi40LTcuMy0xNi43LTQuOC00LjQtMTEuMi02LjYtMTcuNi02LjQtNy44LS41LTE1LjMgMy4yLTIwLjQgOS40LTQuOCA2LjItNy4zIDE0LjktNy4zIDI1Ljl2Mi41YzAgMTAuOCAyLjUgMTkuMiA3LjMgMjUuNCA0LjkgNi4zIDEyLjQgOS43IDIwLjUgOS4zeiIvPjxwYXRoIGQ9Im04NjMuMSA5OS4yYzAtOS40LTgtMTUuOC0yNC0xOS4yLTkuNi0yLjEtMTYuMy00LjYtMjAuMi04cy02LTguMi01LjctMTMuM2MwLTUuNSAyLjctMTAuOCA3LjEtMTQgNS41LTMuOSAxMi4xLTUuNyAxOC44LTUuNSA3LjEtLjUgMTQuMiAxLjggMjAuMiA2IDUgMy45IDcuOCA5LjggNy42IDE2aC0zLjljMC01LTIuNS0xMC4xLTYuNi0xMy4xLTUtMy43LTExLTUuNS0xNy4yLTUuMy01LjctLjItMTEuNSAxLjEtMTYgNC40LTMuNyAyLjUtNiA2LjYtNiAxMS0uMiAzIC43IDUuNyAyLjMgOC4yIDIuMSAyLjMgNC40IDQuMSA3LjMgNS4zIDQuNiAyLjEgOS42IDMuNyAxNC43IDQuNiA1LjMgMS4xIDEwLjMgMi43IDE1LjEgNS4zIDMuMiAxLjYgNi4yIDQuMSA4IDcuMXMyLjUgNi42IDIuNSAxMC4xYy4yIDYtMi43IDExLjUtNy42IDE0LjctNS43IDMuOS0xMi42IDYtMTkuNyA1LjUtNy42LjUtMTQuOS0xLjYtMjEuMS02LTUtMy40LTgtOS4yLTgtMTUuMWgzLjljLjIgNSAzIDkuOCA3LjEgMTIuNiA1LjMgMy4yIDExLjcgNC44IDE3LjkgNC42IDYgLjIgMTEuOS0xLjQgMTYuOS00LjggNC4xLTEuOSA2LjQtNi4zIDYuNi0xMS4xeiIvPjwvZz48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im05NC4yIDYzLjdoLjdjNS4zLTEuNCA5LjItNi40IDkuMi0xMS45bC0uMi0zOC41aDE0LjF2MzguNWMwIDEzLjMtMTAuMSAyNC41LTIzLjEgMjUuOWgtLjV6bS00LjMgMTQuMmgtLjdjLTEzLjEtMS40LTIzLjItMTIuNC0yMy4yLTI1Ljd2LTM4LjloMTQuMnYzOC4yYzAgNS41IDMuOSAxMC41IDkuMiAxMS45LjIgMCAuNSAwIC43LjJ6bS03OS43LTY0LjZoNDguOHYxNGgtNDguOHptMTcuNiA2My45di00Ni4zaDE0djQ2LjN6bTExLjcgMTcuOWgtNC42bC0zLjcgMTQuNC00LjEtMTQuNGgtMy40bC00LjEgMTQuNC0zLjQtMTQuNGgtNC42bDYuMiAyMi45aDMuN2w0LjEtMTQgNC4xIDE0aDMuN3ptNzguNSAyMi45di0yMi45aC00LjZ2MTRsLTkuMi0xNGgtMy45djIyLjloNC42di0xNGw5LjIgMTR6bS0zMS44IDB2LTMuOWgtMTAuNXYtNS41aDguOXYtMy45aC04Ljl2LTUuM2gxMC41di0zLjloLTE1LjF2MjIuOWgxNS4xem0tMzAuNSAwdi0yMi45aC00LjZ2MjIuOXptLTQyLjMtMTE4aDEwMy44YzcuMyAwIDEzLjEgNiAxMy4xIDEzLjF2MTAzLjhjMCA3LjMtNiAxMy4xLTEzLjEgMTMuMWgtMTAzLjhjLTcuMyAwLTEzLjEtNi0xMy4xLTEzLjF2LTEwMy44YzAtNy4xIDUuNy0xMy4xIDEzLjEtMTMuMXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvZz48L3N2Zz4=" alt="" class="logos__informatics"> -->
        <svg class="logos__informatics" enable-background="new 0 0 867 130" viewBox="0 0 867 130" xmlns="http://www.w3.org/2000/svg"><g fill="#010202"><g stroke="#010202" stroke-miterlimit="10" stroke-width=".25"><path d="m176 118.2h-3.9v-104.2h3.9z"/><path d="m204.6 58.9c2.3-5.7 6.2-10.8 11.2-14.2 4.8-3.4 10.5-5.3 16.3-5.3 8.2 0 14.4 2.3 18.6 7.1 4.1 4.8 6.2 11.9 6.2 21.3v50.6h-3.9v-50.8c0-8.2-1.8-14.4-5-18.3-3.4-3.9-8.7-6-15.8-6-6.4 0-12.8 2.5-17.4 7.1-5 5-8.5 11.5-9.8 18.3v49.5h-3.9v-77.4h3.9v18.1z"/><path d="m286.6 118.2v-66.6h-13.5v-3.9h13.5v-11.3c0-7.1 1.8-12.8 5.5-16.7 3.9-4.1 9.2-6.2 14.9-6 3.2 0 6.2.5 9.2 1.1l-.7 3.7c-2.7-.7-5.7-1.1-8.5-1.1-4.6-.2-8.9 1.6-12.1 5-3.2 3.9-4.8 8.9-4.4 14.2v11h20.4v3.9h-20.4v66.7z"/><path d="m321 77.9c0-6.9 1.4-13.7 4.4-19.9 2.5-5.7 6.9-10.3 12.1-13.7 5.3-3.2 11.5-5 17.6-5 12.6-.2 24.3 6.9 29.5 18.3 3 6.2 4.4 13.1 4.4 19.9v3.4c.2 6.9-1.4 13.7-4.1 19.9-2.5 5.7-6.9 10.3-11.9 13.7-5.3 3.2-11.5 5-17.6 5-12.6.2-24.3-7.1-29.5-18.6-3-6.2-4.7-12.8-4.8-19.7 0-.7-.1-2.4-.1-3.3zm3.6 3.6c.2 6.1 1.4 11.7 4.1 17.2 2.3 5 6 9.4 10.8 12.6 4.6 3 10.1 4.6 15.6 4.6 8.2.2 16.3-3.4 21.5-9.8 5.5-6.6 8.2-15.1 8.2-25.7v-2.3c0-6.2-1.4-12.1-3.9-17.6-2.3-5-6-9.4-10.8-12.6-4.6-3-10.1-4.6-15.6-4.6-8.5-.2-16.5 3.4-21.5 10.1-5.7 7.1-8.9 16.3-8.5 25.4z"/><path d="m441.4 43.5-5-.5c-6.2-.2-12.1 2.1-16.5 6.4-4.8 4.8-7.8 11.2-8.7 17.9v50.7h-3.9v-77.2h3.9v16c1.8-5 5-9.6 9.4-12.8 4.6-3.2 10.1-5 15.8-4.8 1.8 0 3.7.2 5.5.9z"/><path d="m511.7 118.2h-3.9v-52c0-7.8-1.8-13.5-5-17.4-3.4-3.9-8.7-5.7-16-5.7-8.5 0-16.3 4.1-20.8 11.2-3.2 4.4-5.3 9.6-6.4 14.9v49h-3.9v-77.4h3.9v18.3c2.3-6 6.2-11 11.2-14.7 9.6-6.6 22.2-6.9 32.1-.9 4.4 3.4 7.3 8.5 8 14 2.3-5.5 6.2-10.1 11.2-13.3 5.3-3.2 11.2-5 17.4-5 8.2 0 14.7 2.3 18.6 7.1s6.2 11.9 6.2 21.3v50.6h-3.9v-50.2c0-8.5-1.6-14.7-5-18.8s-8.7-6-16-6c-8.9-.2-17.2 4.1-22.4 11.2-2.7 3.4-4.6 7.8-5.3 12.4z"/><path d="m637.5 118.2c-1.1-4.6-1.6-9.4-1.4-14.2-3 5-7.3 8.9-12.6 11.5-5.5 2.7-11.7 4.1-17.9 4.1-6.2.2-12.4-1.8-17.2-5.7-4.4-3.9-6.6-9.4-6.6-15.1 0-7.1 3.7-13.5 9.6-17.2 6.4-4.4 14.9-6.4 25.7-6.6h19v-11.3c.2-5.7-1.8-11.2-6.2-15.1-4.1-3.7-9.8-5.3-17.4-5.3-6.4-.2-12.6 1.6-17.6 5.5-4.4 3-7.1 8-7.1 13.5l-3.9-.2c0-6.4 3.2-12.4 8.2-16 5.7-4.6 13.1-6.9 20.4-6.6 8.2 0 14.9 2.1 19.9 6.2 5 4.4 7.8 11 7.6 17.6v37.1c0 8.5.7 14.2 2.1 17.4v.7h-4.6zm-31.8-2.5c6.6.2 13.1-1.6 18.8-4.8 5.3-3.2 9.4-8 11.7-13.7v-18.4h-17.9c-11 0-19.5 2.3-25.4 6.6-4.4 3-7.1 8-7.1 13.3 0 4.6 2.1 9.2 5.7 12.1 3.8 3.5 8.9 5.1 14.2 4.9z"/><path d="m673.4 17.7v20.8h17.6v3.9h-17.6v57.3c-.2 4.1.7 8.5 2.7 12.1 2.1 2.7 5.5 4.4 8.9 3.9 2.5 0 5-.2 7.6-.7l.7 3.7c-2.7.7-5.3.9-8 .9-5.7 0-9.6-1.6-12.1-4.6s-3.7-8-3.7-14.9v-57.7h-14.4v-3.9h14.4v-20.8z"/><path d="m709.9 17.7c0-1.1.5-2.1 1.1-2.7.7-.7 1.8-1.1 2.7-1.1 2.3 0 3.9 1.8 4.1 4.1 0 1.1-.5 2.1-1.1 2.7-.7.7-1.8 1.1-2.7 1.1-2.3-.3-4.1-1.9-4.1-4.1zm5.9 100.5h-3.9v-79.7h3.9z"/><path d="m767.4 115.7c6.2.2 12.4-1.8 17.4-5.5 4.6-3.9 7.3-9.4 7.6-15.6h3.9c-.2 7.1-3.2 13.5-8.7 18.1-5.7 4.6-12.8 7.1-20.2 6.9-8.9.5-17.4-3.7-23.1-10.5-5.7-7.1-8.5-16.5-8.5-28.6v-2.5c0-11.7 2.7-21.1 8.5-28.2 5.5-6.9 14-10.8 22.9-10.5 7.6-.2 14.7 2.3 20.4 7.3 5.5 5 8.5 12.1 8.5 19.7h-3.9c0-6.4-2.7-12.4-7.3-16.7-4.8-4.4-11.2-6.6-17.6-6.4-7.8-.5-15.3 3.2-20.4 9.4-4.8 6.2-7.3 14.9-7.3 25.9v2.5c0 10.8 2.5 19.2 7.3 25.4 4.9 6.3 12.4 9.7 20.5 9.3z"/><path d="m863.1 99.2c0-9.4-8-15.8-24-19.2-9.6-2.1-16.3-4.6-20.2-8s-6-8.2-5.7-13.3c0-5.5 2.7-10.8 7.1-14 5.5-3.9 12.1-5.7 18.8-5.5 7.1-.5 14.2 1.8 20.2 6 5 3.9 7.8 9.8 7.6 16h-3.9c0-5-2.5-10.1-6.6-13.1-5-3.7-11-5.5-17.2-5.3-5.7-.2-11.5 1.1-16 4.4-3.7 2.5-6 6.6-6 11-.2 3 .7 5.7 2.3 8.2 2.1 2.3 4.4 4.1 7.3 5.3 4.6 2.1 9.6 3.7 14.7 4.6 5.3 1.1 10.3 2.7 15.1 5.3 3.2 1.6 6.2 4.1 8 7.1s2.5 6.6 2.5 10.1c.2 6-2.7 11.5-7.6 14.7-5.7 3.9-12.6 6-19.7 5.5-7.6.5-14.9-1.6-21.1-6-5-3.4-8-9.2-8-15.1h3.9c.2 5 3 9.8 7.1 12.6 5.3 3.2 11.7 4.8 17.9 4.6 6 .2 11.9-1.4 16.9-4.8 4.1-1.9 6.4-6.3 6.6-11.1z"/></g><path clip-rule="evenodd" d="m94.2 63.7h.7c5.3-1.4 9.2-6.4 9.2-11.9l-.2-38.5h14.1v38.5c0 13.3-10.1 24.5-23.1 25.9h-.5zm-4.3 14.2h-.7c-13.1-1.4-23.2-12.4-23.2-25.7v-38.9h14.2v38.2c0 5.5 3.9 10.5 9.2 11.9.2 0 .5 0 .7.2zm-79.7-64.6h48.8v14h-48.8zm17.6 63.9v-46.3h14v46.3zm11.7 17.9h-4.6l-3.7 14.4-4.1-14.4h-3.4l-4.1 14.4-3.4-14.4h-4.6l6.2 22.9h3.7l4.1-14 4.1 14h3.7zm78.5 22.9v-22.9h-4.6v14l-9.2-14h-3.9v22.9h4.6v-14l9.2 14zm-31.8 0v-3.9h-10.5v-5.5h8.9v-3.9h-8.9v-5.3h10.5v-3.9h-15.1v22.9h15.1zm-30.5 0v-22.9h-4.6v22.9zm-42.3-118h103.8c7.3 0 13.1 6 13.1 13.1v103.8c0 7.3-6 13.1-13.1 13.1h-103.8c-7.3 0-13.1-6-13.1-13.1v-103.8c0-7.1 5.7-13.1 13.1-13.1z" fill-rule="evenodd"/></g></svg>
        <div class="logos__research-group">
            <ResearchGroupLogo></ResearchGroupLogo>
        </div>
    </div>
    <div class="details">
        <div class="details__thesis">
            <h1 class="thesis-title">
                {thesisTitle}
            </h1>
            <h2 class="author">{author}</h2>
            <h2 class="program-title">{programTitle}</h2>
        </div>
        <div class="details__university">
            <p class="info__title">TU Wien Informatics</p>
            <p class="info__line">{institute}</p>
            <p class="info__line">{researchUnit}</p>
            <p class="info__line">Supervisor: {supervisor}</p>
            {#each coSupervisors as coSupervisor, index}
            <p class="info__line">{index === 0 ? 'Assistance: ' : ''}{coSupervisor}</p>
            {/each}
            {#if yourEmail}
            <p class="info__line">Contact: {yourEmail}</p>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    .container {
        height: dpiAdjust(200mm);
        width: 100%;
        box-sizing: border-box;
        background-color: var(--c-tuw-header-background);
        padding: dpiAdjust(26mm) dpiAdjust(26mm) dpiAdjust(10mm) dpiAdjust(26mm);
        display: flex;
        flex-direction: column;
        // overflow: hidden;
    }

    .logos {
        display: flex;
        justify-content: space-between;
        align-content: flex-start;

        &__informatics {
            max-height: dpiAdjust(39mm);
            height: dpiAdjust(39mm);
        }

        &__research-group {
            height: dpiAdjust(60mm);
            width: dpiAdjust(200mm);
            // display: flex;
            // flex-direction: row;
            // justify-content: end;
            // align-content: flex-start;
        }
    }

    .info {
        &__title {
            @include font-copy-bold;
            margin: 0;
            margin-bottom: dpiAdjust(2mm);
        }
        
        &__line {
            margin: 0;
            @include font-copy;
        }
    }

    .details {
        display: grid;
        grid-template-columns: 2fr 1fr;
        flex-grow: 1;
        // justify-content: space-between;
        // flex-direction: row;
        // display: flex;

        &__thesis {
            margin-inline-start: dpiAdjust(50mm);
            align-self: end;
            justify-self: start;
        }

        &__university {
            text-align: right;
            justify-self: end;
            align-self: end;
        }
    }

    .thesis-title {
        @include font-thesis-title;
        margin-bottom: adpiAdjust(10mm);
    }

    .program-title, .author {
        @include font-thesis-author;
        margin: dpiAdjust(1mm) 0;
    }
</style>