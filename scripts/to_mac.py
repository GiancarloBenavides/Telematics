from curses import echo
import subprocess
import optparse
import re


def get_arguments() -> list:
    ''' Obtener las opciones y argumentos ingresados por consola. '''
    parser = optparse.OptionParser(usage="%prog [OPTION]... [NEW MAC]...")
    parser.add_option(
        "-i", "--interface", dest="interface", help="Source Interface")
    options, args = parser.parse_args()
    if not options.interface:
        parser.error("Not defined interface, use --help")
    elif not args:
        parser.error("Not defined new mac, use --help")
    return options.interface, args[0]


def get_mac(interface: str) -> str:
    ''' Obtener en Linux la dirección MAC de una interface. '''
    results = subprocess.check_output(["ifconfig", interface])
    mac = re.search(r"(\w\w:){5}\w\w", str(results))
    if mac:
        return mac.group(0)
    else:
        print("[-] MAC not found")


def changue_mac(interface: str, mac: str) -> None:
    ''' Cambiar en Linux la dirección MAC de una interface. '''
    subprocess.call(["ifconfig", interface, "down"])
    subprocess.call(["ifconfig", interface, "hw", "ether", mac])
    subprocess.call(["ifconfig", interface, "up"])


if __name__ == "__main__":
    interface, new_mac = get_arguments()
    mac = get_mac(interface)

    with open('bck.txt', 'a') as file:
        file.write(f"{mac}\n")

    # echo mac>> bck-mac.txt
    print(mac.group(0))
